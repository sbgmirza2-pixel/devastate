import { NextResponse } from 'next/server';
import { getCurrentAdmin } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';
import { EJSON } from 'mongodb';

const collections = ['content', 'admins', 'apks', 'categories', 'media', 'activityLogs'];

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin || admin.role !== 'owner') return NextResponse.json({ error: 'Owner access required' }, { status: 403 });
  const db = await getDatabase();
  const backup = {};
  for (const name of collections) backup[name] = await db.collection(name).find().toArray();
  return new NextResponse(EJSON.stringify({ version: 1, createdAt: new Date(), collections: backup }, null, 2), { headers: { 'Content-Type': 'application/json', 'Content-Disposition': 'attachment; filename="devastate-backup.json"' } });
}

export async function POST(request) {
  const admin = await getCurrentAdmin();
  if (!admin || admin.role !== 'owner') return NextResponse.json({ error: 'Owner access required' }, { status: 403 });
  const payload = EJSON.parse(JSON.stringify(await request.json()));
  if (payload.version !== 1 || !payload.collections) return NextResponse.json({ error: 'Invalid backup format' }, { status: 400 });
  const db = await getDatabase();
  for (const name of collections) {
    if (!Array.isArray(payload.collections[name])) continue;
    await db.collection(name).deleteMany({});
    if (payload.collections[name].length) await db.collection(name).insertMany(payload.collections[name]);
  }
  return NextResponse.json({ success: true });
}