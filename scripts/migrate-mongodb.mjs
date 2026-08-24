import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const uri = process.env.MONGO_DB;
const dbName = process.env.MONGO_DB_NAME || 'devastate';
if (!uri) throw new Error('MONGO_DB is required. Add it to .env.local before running npm run db:migrate.');

const client = await MongoClient.connect(uri);
const db = client.db(dbName);
await Promise.all([
  db.collection('content').createIndex({ key: 1 }, { unique: true }),
  db.collection('admins').createIndex({ email: 1 }, { unique: true }),
  db.collection('sessions').createIndex({ tokenHash: 1 }, { unique: true }),
  db.collection('sessions').createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
  db.collection('activityLogs').createIndex({ createdAt: -1 }),
  db.collection('apks').createIndex({ slug: 1 }, { unique: true }),
  db.collection('apks').createIndex({ packageName: 1 }),
  db.collection('categories').createIndex({ slug: 1 }, { unique: true }),
  db.collection('media').createIndex({ kind: 1, createdAt: -1 }),
  db.collection('backups').createIndex({ createdAt: -1 }),
  db.collection('blogPosts').createIndex({ slug: 1 }, { unique: true }),
  db.collection('reviews').createIndex({ createdAt: -1 }),
  db.collection('downloads').createIndex({ createdAt: -1 }),
  db.collection('loginAttempts').createIndex({ key: 1, createdAt: -1 }),
]);
await db.collection('_migrations').updateOne(
  { name: '001-initial-schema' },
  { $set: { name: '001-initial-schema', appliedAt: new Date() } },
  { upsert: true }
);
await client.close();
console.log(`MongoDB schema ready: ${dbName}`);