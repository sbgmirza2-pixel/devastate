import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { getApk, recordActivity } from '@/lib/database';
import { getCurrentAdmin } from '@/lib/auth';

// GET /api/apk — public, returns all APK metadata
export async function GET() {
  try {
    const published = await getApk();
    const data = published ? { ...published, _id: published._id.toString() } : null;
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to read APK data' }, { status: 500 });
  }
}

// PUT /api/apk — admin-protected, updates APK metadata
export async function PUT(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const updates = await request.json();
    const current = await getApk();
    if (!current) return NextResponse.json({ error: 'No published APK version exists' }, { status: 404 });
    const updated = { ...current, ...updates, updatedAt: new Date().toISOString().split('T')[0] };
    const { getDatabase } = await import('@/lib/mongodb');
    await (await getDatabase()).collection('apks').updateOne({ _id: current._id }, { $set: updated });
    const admin = await getCurrentAdmin();
    await recordActivity({ adminId: admin?._id.toString(), action: 'updated', entity: 'apk', details: { name: updated.appName } });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Failed to update APK data' }, { status: 500 });
  }
}
