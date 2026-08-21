import { NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/dataUtils';
import { isAuthenticated } from '@/lib/auth';

// GET /api/settings — public
export async function GET() {
  try {
    const settings = readData('siteSettings.json');
    return NextResponse.json(settings);
  } catch {
    return NextResponse.json({ error: 'Failed to read settings' }, { status: 500 });
  }
}

// PUT /api/settings — admin-protected
export async function PUT(request) {
  const authed = await isAuthenticated();
  if (!authed) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const updates = await request.json();
    const current = readData('siteSettings.json');
    const updated = { ...current, ...updates };
    writeData('siteSettings.json', updated);
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
