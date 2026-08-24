import { NextResponse } from 'next/server';
import { hasPermission } from '@/lib/auth';
import { getContent, setContent, recordActivity } from '@/lib/database';
import { getCurrentAdmin } from '@/lib/auth';

// GET /api/settings — public
export async function GET() {
  try {
    const settings = await getContent('settings', {});
    return NextResponse.json(settings);
  } catch {
    return NextResponse.json({ error: 'Failed to read settings' }, { status: 500 });
  }
}

// PUT /api/settings — admin-protected
export async function PUT(request) {
  if (!await hasPermission('settings:write')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });

  try {
    const updates = await request.json();
    const current = await getContent('settings', {});
    const updated = { ...current, ...updates };
    await setContent('settings', updated);
    const admin = await getCurrentAdmin();
    await recordActivity({ adminId: admin?._id.toString(), action: 'updated', entity: 'settings' });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
