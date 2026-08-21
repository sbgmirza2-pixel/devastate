import { NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/dataUtils';
import { isAuthenticated } from '@/lib/auth';

// GET /api/apk — public, returns all APK metadata
export async function GET() {
  try {
    const data = readData('apkData.json');
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
    const current = readData('apkData.json');
    const updated = { ...current, ...updates, updatedAt: new Date().toISOString().split('T')[0] };
    writeData('apkData.json', updated);
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Failed to update APK data' }, { status: 500 });
  }
}
