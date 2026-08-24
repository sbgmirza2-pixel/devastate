import { NextResponse } from 'next/server';
import { getCurrentAdmin, hashPassword } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { recordActivity } from '@/lib/database';

export async function PUT(request, { params }) {
  const current = await getCurrentAdmin();
  if (!current || current.role !== 'owner') return NextResponse.json({ error: 'Owner access required' }, { status: 403 });
  const idValue = (await params).id;
  if (!ObjectId.isValid(idValue)) return NextResponse.json({ error: 'Invalid admin id' }, { status: 400 });
  const id = new ObjectId(idValue);
  const body = await request.json();
  const updates = { updatedAt: new Date() };
  for (const field of ['name', 'role', 'permissions', 'active']) if (body[field] !== undefined) updates[field] = body[field];
  if (updates.role && !['owner', 'admin', 'editor'].includes(updates.role)) return NextResponse.json({ error: 'Invalid admin role' }, { status: 400 });
  if (updates.permissions && !Array.isArray(updates.permissions)) return NextResponse.json({ error: 'Permissions must be an array' }, { status: 400 });
  if (body.password) updates.passwordHash = await hashPassword(body.password);
  const db = await getDatabase();
  const result = await db.collection('admins').findOneAndUpdate({ _id: id }, { $set: updates }, { returnDocument: 'after', projection: { passwordHash: 0 } });
  if (!result) return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
  await recordActivity({ adminId: current._id.toString(), action: 'updated', entity: 'admin', entityId: id.toString() });
  return NextResponse.json(result);
}

export async function DELETE(request, { params }) {
  const current = await getCurrentAdmin();
  if (!current || current.role !== 'owner') return NextResponse.json({ error: 'Owner access required' }, { status: 403 });
  const idValue = (await params).id;
  if (!ObjectId.isValid(idValue)) return NextResponse.json({ error: 'Invalid admin id' }, { status: 400 });
  const id = new ObjectId(idValue);
  if (id.equals(current._id)) return NextResponse.json({ error: 'You cannot delete your own account' }, { status: 400 });
  const db = await getDatabase();
  await db.collection('admins').deleteOne({ _id: id });
  await recordActivity({ adminId: current._id.toString(), action: 'deleted', entity: 'admin', entityId: id.toString() });
  return NextResponse.json({ success: true });
}