import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { put } from '@vercel/blob';
import { canAccess, getCurrentAdmin } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';
import { recordActivity } from '@/lib/database';

const allowedTypes = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/gif']);
const extensions = { 'image/png': '.png', 'image/jpeg': '.jpg', 'image/webp': '.webp', 'image/gif': '.gif' };

export async function GET() {
  if (!await getCurrentAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const media = await (await getDatabase()).collection('media').find().sort({ createdAt: -1 }).toArray();
  return NextResponse.json(media.map((item) => ({ ...item, _id: item._id.toString() })));
}

export async function POST(request) {
  const admin = await getCurrentAdmin();
  if (!canAccess(admin, 'media:write')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });
  const form = await request.formData();
  const file = form.get('file');
  const kind = ['icon', 'screenshot', 'featured'].includes(form.get('kind')) ? form.get('kind') : 'screenshot';
  if (!file || !allowedTypes.has(file.type) || file.size > 10 * 1024 * 1024) return NextResponse.json({ error: 'Use a PNG, JPEG, WEBP, or GIF image up to 10 MB' }, { status: 400 });
  if (!process.env.BLOB_READ_WRITE_TOKEN) return NextResponse.json({ error: 'Media storage is not configured' }, { status: 503 });
  const blob = await put(`media/${crypto.randomUUID()}${extensions[file.type]}`, file, { access: 'public' });
  const media = { name: file.name, kind, url: blob.url, mimeType: file.type, size: file.size, createdAt: new Date(), updatedAt: new Date() };
  const result = await (await getDatabase()).collection('media').insertOne(media);
  await recordActivity({ adminId: admin._id.toString(), action: 'created', entity: 'media', entityId: result.insertedId.toString(), details: { kind: media.kind, name: media.name } });
  return NextResponse.json({ ...media, _id: result.insertedId.toString() }, { status: 201 });
}