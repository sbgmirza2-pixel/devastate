import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { del, put } from '@vercel/blob';
import { ObjectId } from 'mongodb';
import { canAccess, getCurrentAdmin } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';
import { recordActivity } from '@/lib/database';

export async function DELETE(request, { params }) {
  const admin = await getCurrentAdmin();
  if (!canAccess(admin, 'media:delete')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });
  const idValue = (await params).id;
  if (!ObjectId.isValid(idValue)) return NextResponse.json({ error: 'Invalid media id' }, { status: 400 });
  const id = new ObjectId(idValue);
  const db = await getDatabase();
  const item = await db.collection('media').findOneAndDelete({ _id: id });
  if (!item) return NextResponse.json({ error: 'Media not found' }, { status: 404 });
  try { await del(item.url); } catch {}
  await recordActivity({ adminId: admin._id.toString(), action: 'deleted', entity: 'media', entityId: id.toString(), details: { name: item.name } });
  return NextResponse.json({ success: true });
}

export async function PUT(request, { params }) {
  const admin = await getCurrentAdmin();
  if (!canAccess(admin, 'media:write')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });
  const idValue = (await params).id;
  if (!ObjectId.isValid(idValue)) return NextResponse.json({ error: 'Invalid media id' }, { status: 400 });
  const id = new ObjectId(idValue);
  const form = await request.formData();
  const file = form.get('file');
  if (!file) return NextResponse.json({ error: 'Replacement image is required' }, { status: 400 });
  const db = await getDatabase();
  const old = await db.collection('media').findOne({ _id: id });
  if (!old) return NextResponse.json({ error: 'Media not found' }, { status: 404 });
  const extension = { 'image/png': '.png', 'image/jpeg': '.jpg', 'image/webp': '.webp', 'image/gif': '.gif' }[file.type];
  if (!extension || file.size > 10 * 1024 * 1024) return NextResponse.json({ error: 'Invalid replacement image' }, { status: 400 });
  if (!process.env.BLOB_READ_WRITE_TOKEN) return NextResponse.json({ error: 'Media storage is not configured' }, { status: 503 });
  const blob = await put(`media/${crypto.randomUUID()}${extension}`, file, { access: 'public' });
  await db.collection('media').updateOne({ _id: id }, { $set: { name: file.name, url: blob.url, mimeType: file.type, size: file.size, updatedAt: new Date() } });
  try { await del(old.url); } catch {}
  await recordActivity({ adminId: admin._id.toString(), action: 'replaced', entity: 'media', entityId: id.toString(), details: { name: file.name } });
  return NextResponse.json({ success: true, url: blob.url });
}