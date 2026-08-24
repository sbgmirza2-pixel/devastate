import { NextResponse } from 'next/server';
import { getCurrentAdmin } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const db = await getDatabase();
  const [totalApks, publishedApks, drafts, categories, downloads, recentAdded, recentUpdated] = await Promise.all([
    db.collection('apks').countDocuments(),
    db.collection('apks').countDocuments({ status: 'published' }),
    db.collection('apks').countDocuments({ status: 'draft' }),
    db.collection('categories').countDocuments(),
    db.collection('downloads').countDocuments(),
    db.collection('apks').find().sort({ createdAt: -1 }).limit(5).toArray(),
    db.collection('apks').find().sort({ updatedAt: -1 }).limit(5).toArray(),
  ]);
  return NextResponse.json({ totalApks, publishedApks, drafts, categories, downloads, recentAdded, recentUpdated });
}