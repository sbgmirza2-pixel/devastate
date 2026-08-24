import { NextResponse } from 'next/server';
import { getCurrentAdmin, hashPassword } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';
import { recordActivity } from '@/lib/database';

const publicAdmin = ({ passwordHash, ...admin }) => admin;

export async function GET() {
  const current = await getCurrentAdmin();
  if (!current) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const db = await getDatabase();
  const admins = await db.collection('admins').find({}, { projection: { passwordHash: 0 } }).sort({ createdAt: -1 }).toArray();
  return NextResponse.json(admins);
}

export async function POST(request) {
  const current = await getCurrentAdmin();
  if (!current || current.role !== 'owner') return NextResponse.json({ error: 'Owner access required' }, { status: 403 });
  try {
    const body = await request.json();
    if (!body.email || !body.password || !body.name) return NextResponse.json({ error: 'Name, email, and password are required' }, { status: 400 });
    const db = await getDatabase();
    const admin = {
      name: String(body.name).trim().slice(0, 100),
      email: String(body.email).trim().toLowerCase(),
      passwordHash: await hashPassword(body.password),
      role: body.role === 'editor' ? 'editor' : 'admin',
      permissions: Array.isArray(body.permissions) ? body.permissions : [],
      active: body.active !== false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const result = await db.collection('admins').insertOne(admin);
    await recordActivity({ adminId: current._id.toString(), action: 'created', entity: 'admin', entityId: result.insertedId.toString() });
    return NextResponse.json(publicAdmin({ ...admin, _id: result.insertedId }), { status: 201 });
  } catch (error) {
    if (error.code === 11000) return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
    return NextResponse.json({ error: 'Failed to create admin' }, { status: 500 });
  }
}