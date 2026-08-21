import { NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/dataUtils';

// POST /api/apk/track-download — public, increments download counter
export async function POST() {
  try {
    const stats = readData('stats.json');
    stats.totalDownloads = (stats.totalDownloads || 0) + 1;
    stats.lastDownloadAt = new Date().toISOString();
    writeData('stats.json', stats);
    return NextResponse.json({ success: true, totalDownloads: stats.totalDownloads });
  } catch {
    // Never crash the download page due to tracking failure
    return NextResponse.json({ success: true });
  }
}
