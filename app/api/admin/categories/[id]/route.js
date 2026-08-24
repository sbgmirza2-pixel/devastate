import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { canAccess, getCurrentAdmin } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';
import { recordActivity } from '@/lib/database';

export async function PUT(request, { params }) {
  const admin = await getCurrentAdmin();
  if (!canAccess(admin, 'category:write')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });
  const idValue = (await params).id;
  if (!ObjectId.isValid(idValue)) return NextResponse.json({ error: 'Invalid category id' }, { status: 400 });
  const body = await request.json();
  const db = await getDatabase();
  const id = new ObjectId(idValue);
  const result = await db.collection('categories').findOneAndUpdate({ _id: id }, { $set: { ...body, updatedAt: new Date() } }, { returnDocument: 'after' });
  if (result) await recordActivity({ adminId: admin._id.toString(), action: 'updated', entity: 'category', entityId: id.toString(), details: { name: result.name } });
  return result ? NextResponse.json(result) : NextResponse.json({ error: 'Category not found' }, { status: 404 });
}

export async function DELETE(request, { params }) {
  const admin = await getCurrentAdmin();
  if (!canAccess(admin, 'category:delete')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });
  const idValue = (await params).id;
  if (!ObjectId.isValid(idValue)) return NextResponse.json({ error: 'Invalid category id' }, { status: 400 });
  const db = await getDatabase();
  const id = new ObjectId(idValue);
  await db.collection('categories').deleteOne({ _id: id });
  await recordActivity({ adminId: admin._id.toString(), action: 'deleted', entity: 'category', entityId: id.toString() });
  return NextResponse.json({ success: true });
}