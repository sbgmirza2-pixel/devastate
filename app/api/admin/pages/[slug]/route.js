import { NextResponse } from 'next/server';
import { canAccess, getCurrentAdmin } from '@/lib/auth';
import { getContent, setContent, recordActivity } from '@/lib/database';

const allowed = new Set(['about', 'contact', 'privacy', 'terms', 'disclaimer']);

export async function GET(request, { params }) {
  const slug = (await params).slug;
  if (!allowed.has(slug)) return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  return NextResponse.json({ slug, content: await getContent(`page:${slug}`, '') });
}

export async function PUT(request, { params }) {
  const admin = await getCurrentAdmin();
  const slug = (await params).slug;
  if (!canAccess(admin, 'page:write')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });
  if (!allowed.has(slug)) return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  const body = await request.json();
  if (typeof body.content !== 'string' || body.content.length > 200000) return NextResponse.json({ error: 'Invalid page content' }, { status: 400 });
  await setContent(`page:${slug}`, body.content);
  await recordActivity({ adminId: admin._id.toString(), action: 'updated', entity: 'page', entityId: slug });
  return NextResponse.json({ slug, content: body.content });
}