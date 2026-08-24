import { ObjectId } from 'mongodb';
import { getDatabase } from './mongodb';

export async function getContent(key, fallback = null) {
  const db = await getDatabase();
  if (!db) return fallback;
  const record = await db.collection('content').findOne({ key });
  return record?.data ?? fallback;
}

export async function getApk() {
  const db = await getDatabase();
  if (!db) return null;
  return db.collection('apks').findOne({ status: 'published' }, { sort: { updatedAt: -1 } });
}

export async function listBlogPosts() {
  const db = await getDatabase();
  if (!db) return [];
  return db.collection('blogPosts').find({ status: { $ne: 'draft' } }).sort({ date: -1, createdAt: -1 }).toArray();
}

export async function getBlogPost(slug) {
  const db = await getDatabase();
  if (!db) return null;
  return db.collection('blogPosts').findOne({ slug, status: { $ne: 'draft' } });
}

export async function listReviews() {
  const db = await getDatabase();
  if (!db) return [];
  return db.collection('reviews').find({ approved: { $ne: false } }).sort({ createdAt: -1 }).toArray();
}

export async function setContent(key, data) {
  const db = await getDatabase();
  if (!db) throw new Error('Database is not configured');
  await db.collection('content').updateOne(
    { key },
    { $set: { data, updatedAt: new Date() }, $setOnInsert: { key, createdAt: new Date() } },
    { upsert: true }
  );
  return data;
}

export async function recordActivity({ adminId, action, entity, entityId, details = {} }) {
  const db = await getDatabase();
  if (!db) return;
  await db.collection('activityLogs').insertOne({
    adminId: adminId ? new ObjectId(adminId) : null,
    action,
    entity,
    entityId: entityId || null,
    details,
    createdAt: new Date(),
  });
}