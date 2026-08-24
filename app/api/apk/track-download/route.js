import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

// POST /api/apk/track-download — public, increments download counter
export async function POST() {
  try {
    const db = await getDatabase();
    if (db) {
      await db.collection('downloads').insertOne({ createdAt: new Date() });
      const totalDownloads = await db.collection('downloads').countDocuments();
      return NextResponse.json({ success: true, totalDownloads });
    }
    return NextResponse.json({ success: true });
  } catch {
    // Never crash the download page due to tracking failure
    return NextResponse.json({ success: true });
  }
}
