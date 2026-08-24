import { NextResponse } from 'next/server';
import { canAccess, getCurrentAdmin } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';
import { recordActivity } from '@/lib/database';

const fields = [
  'appName', 'version', 'packageName', 'developer', 'category', 'size', 'sizeBytes',
  'androidRequired', 'iconUrl', 'featuredImage', 'screenshots', 'shortDescription',
  'description', 'features', 'changelog', 'downloadUrl', 'mirrorDownloadUrl',
  'officialWebsite', 'releaseDate', 'slug', 'seo', 'status', 'downloadCount',
];

function serialize(apk) {
  if (!apk) return null;
  return { ...apk, _id: apk._id.toString() };
}

function buildDocument(body, current = {}) {
  const document = { ...current };
  for (const field of fields) if (body[field] !== undefined) document[field] = body[field];
  document.status = document.status === 'published' ? 'published' : 'draft';
  document.screenshots = Array.isArray(document.screenshots) ? document.screenshots : [];
  document.features = Array.isArray(document.features) ? document.features : [];
  document.seo = document.seo && typeof document.seo === 'object' ? document.seo : {};
  document.updatedAt = new Date();
  return document;
}

export async function GET(request) {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('search')?.trim();
  const filter = {};
  if (query) filter.$or = [{ appName: { $regex: query, $options: 'i' } }, { packageName: { $regex: query, $options: 'i' } }];
  for (const name of ['category', 'status', 'version']) if (searchParams.get(name)) filter[name] = searchParams.get(name);
  if (searchParams.get('updatedAfter')) filter.updatedAt = { $gte: new Date(searchParams.get('updatedAfter')) };
  const db = await getDatabase();
  const apks = await db.collection('apks').find(filter).sort({ updatedAt: -1 }).toArray();
  return NextResponse.json(apks.map(serialize));
}

export async function POST(request) {
  const admin = await getCurrentAdmin();
  if (!canAccess(admin, 'apk:write')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });
  const body = await request.json();
  if (!body.appName || !body.version || !body.packageName || !body.slug) return NextResponse.json({ error: 'App name, version, package name, and slug are required' }, { status: 400 });
  const db = await getDatabase();
  const document = { ...buildDocument(body), createdAt: new Date() };
  try {
    const result = await db.collection('apks').insertOne(document);
    await recordActivity({ adminId: admin._id.toString(), action: 'created', entity: 'apk', entityId: result.insertedId.toString(), details: { name: document.appName, version: document.version } });
    return NextResponse.json(serialize({ ...document, _id: result.insertedId }), { status: 201 });
  } catch (error) {
    if (error.code === 11000) return NextResponse.json({ error: 'Slug already exists' }, { status: 409 });
    return NextResponse.json({ error: 'Failed to create APK' }, { status: 500 });
  }
}