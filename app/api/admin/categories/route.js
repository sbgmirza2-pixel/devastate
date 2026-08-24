import { NextResponse } from 'next/server';
import { canAccess, getCurrentAdmin } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';
import { recordActivity } from '@/lib/database';

export async function GET() {
  const db = await getDatabase();
  return NextResponse.json(await db.collection('categories').find().sort({ name: 1 }).toArray());
}

export async function POST(request) {
  const admin = await getCurrentAdmin();
  if (!canAccess(admin, 'category:write')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });
  const body = await request.json();
  if (!body.name || !body.slug) return NextResponse.json({ error: 'Name and slug are required' }, { status: 400 });
  const db = await getDatabase();
  try {
    const category = { name: body.name.trim(), slug: body.slug.trim().toLowerCase(), description: body.description || '', createdAt: new Date(), updatedAt: new Date() };
    const result = await db.collection('categories').insertOne(category);
    await recordActivity({ adminId: admin._id.toString(), action: 'created', entity: 'category', entityId: result.insertedId.toString(), details: { name: category.name } });
    return NextResponse.json({ ...category, _id: result.insertedId }, { status: 201 });
  } catch (error) {
    if (error.code === 11000) return NextResponse.json({ error: 'Slug already exists' }, { status: 409 });
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
  }
}