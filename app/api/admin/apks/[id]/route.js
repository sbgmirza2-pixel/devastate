import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { canAccess, getCurrentAdmin } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';
import { recordActivity } from '@/lib/database';

const editableFields = [
  'appName', 'version', 'packageName', 'developer', 'category', 'size', 'sizeBytes',
  'androidRequired', 'iconUrl', 'featuredImage', 'screenshots', 'shortDescription',
  'description', 'features', 'changelog', 'downloadUrl', 'mirrorDownloadUrl',
  'officialWebsite', 'releaseDate', 'slug', 'seo', 'status', 'downloadCount',
];

function validId(value) { return ObjectId.isValid(value) ? new ObjectId(value) : null; }
function serialize(apk) { return apk ? { ...apk, _id: apk._id.toString() } : null; }

export async function GET(request, { params }) {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const id = validId((await params).id);
  if (!id) return NextResponse.json({ error: 'Invalid APK id' }, { status: 400 });
  const apk = await (await getDatabase()).collection('apks').findOne({ _id: id });
  return apk ? NextResponse.json(serialize(apk)) : NextResponse.json({ error: 'APK not found' }, { status: 404 });
}

export async function PUT(request, { params }) {
  const admin = await getCurrentAdmin();
  if (!canAccess(admin, 'apk:write')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });
  const id = validId((await params).id);
  if (!id) return NextResponse.json({ error: 'Invalid APK id' }, { status: 400 });
  const body = await request.json();
  const updates = { updatedAt: new Date() };
  for (const field of editableFields) if (body[field] !== undefined) updates[field] = body[field];
  if (updates.status) updates.status = updates.status === 'published' ? 'published' : 'draft';
  try {
    const db = await getDatabase();
    const result = await db.collection('apks').findOneAndUpdate({ _id: id }, { $set: updates }, { returnDocument: 'after' });
    if (!result) return NextResponse.json({ error: 'APK not found' }, { status: 404 });
    await recordActivity({ adminId: admin._id.toString(), action: 'updated', entity: 'apk', entityId: id.toString(), details: { name: result.appName, version: result.version } });
    return NextResponse.json(serialize(result));
  } catch (error) {
    if (error.code === 11000) return NextResponse.json({ error: 'Slug already exists' }, { status: 409 });
    return NextResponse.json({ error: 'Failed to update APK' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const admin = await getCurrentAdmin();
  if (!canAccess(admin, 'apk:delete')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });
  const id = validId((await params).id);
  if (!id) return NextResponse.json({ error: 'Invalid APK id' }, { status: 400 });
  const db = await getDatabase();
  const result = await db.collection('apks').findOneAndDelete({ _id: id });
  if (!result) return NextResponse.json({ error: 'APK not found' }, { status: 404 });
  await recordActivity({ adminId: admin._id.toString(), action: 'deleted', entity: 'apk', entityId: id.toString(), details: { name: result.appName, version: result.version } });
  return NextResponse.json({ success: true });
}