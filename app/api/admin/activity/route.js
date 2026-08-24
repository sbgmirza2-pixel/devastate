import { NextResponse } from 'next/server';
import { getCurrentAdmin } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const db = await getDatabase();
  const logs = await db.collection('activityLogs').aggregate([
    { $sort: { createdAt: -1 } }, { $limit: 100 },
    { $lookup: { from: 'admins', localField: 'adminId', foreignField: '_id', as: 'admin' } },
    { $project: { action: 1, entity: 1, entityId: 1, details: 1, createdAt: 1, admin: { $arrayElemAt: ['$admin.name', 0] } } },
  ]).toArray();
  return NextResponse.json(logs);
}