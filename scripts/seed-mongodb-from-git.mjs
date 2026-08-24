import { execFileSync } from 'node:child_process';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local', quiet: true });
dotenv.config({ path: '.env', quiet: true });

const uri = process.env.MONGO_DB;
const dbName = process.env.MONGO_DB_NAME || 'devastate';
if (!uri) throw new Error('MONGO_DB is required. Add it to .env.local before seeding.');

function readGitJson(file) {
  return JSON.parse(execFileSync('git', ['show', `HEAD:${file}`], { encoding: 'utf8' }));
}

const apk = readGitJson('data/apkData.json');
const settings = readGitJson('data/siteSettings.json');
const posts = readGitJson('data/blogPosts.json');
const reviews = readGitJson('data/reviews.json');
const stats = readGitJson('data/stats.json');
const now = new Date();

const client = await MongoClient.connect(uri);
const db = client.db(dbName);

await db.collection('content').updateOne(
  { key: 'settings' },
  { $set: { key: 'settings', data: settings, updatedAt: now, createdAt: now } },
  { upsert: true }
);
await db.collection('content').updateOne(
  { key: 'stats' },
  { $set: { key: 'stats', data: stats, updatedAt: now, createdAt: now } },
  { upsert: true }
);

const apkDocument = {
  ...apk,
  slug: apk.slug || 'devastate-apk',
  status: 'published',
  createdAt: new Date(apk.releaseDate || now),
  updatedAt: new Date(apk.updatedAt || now),
  migratedFromGit: true,
};
await db.collection('apks').updateOne(
  { slug: apkDocument.slug },
  { $set: apkDocument },
  { upsert: true }
);

for (const post of posts) {
  const document = { ...post, status: 'published', createdAt: new Date(post.date || now), updatedAt: now, migratedFromGit: true };
  await db.collection('blogPosts').updateOne(
    { slug: post.slug },
    { $set: document },
    { upsert: true }
  );
}

for (const review of reviews) {
  const document = {
    author: review.author,
    rating: Number(review.rating),
    comment: review.comment,
    date: review.date,
    approved: review.approved !== false,
    createdAt: new Date(review.date || now),
    migratedFromGit: true,
  };
  await db.collection('reviews').updateOne(
    { migratedFromGit: true, author: document.author, comment: document.comment },
    { $set: document },
    { upsert: true }
  );
}

if (apk.category) {
  await db.collection('categories').updateOne(
    { slug: apk.category.toLowerCase().replace(/[^a-z0-9]+/g, '-') },
    { $setOnInsert: { name: apk.category, slug: apk.category.toLowerCase().replace(/[^a-z0-9]+/g, '-'), description: '', createdAt: now, updatedAt: now, migratedFromGit: true } },
    { upsert: true }
  );
}

await db.collection('_migrations').updateOne(
  { name: '002-seed-from-git' },
  { $set: { name: '002-seed-from-git', appliedAt: now, source: 'git:HEAD' } },
  { upsert: true }
);

console.log(`Seeded Git data into MongoDB database: ${dbName}`);
await client.close();
