import { NextResponse } from 'next/server';
import { canAccess, getCurrentAdmin } from '@/lib/auth';
import { getContent, setContent, recordActivity } from '@/lib/database';
import { defaultHomeContent } from '@/lib/homeDefaults';

const allowed = new Set(['home', 'about', 'contact', 'privacy', 'terms', 'disclaimer']);

export async function GET(request, { params }) {
  const slug = (await params).slug;
  if (!allowed.has(slug)) return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  
  if (slug === 'home') {
    const saved = await getContent('page:home', null);
    const merged = saved ? { ...defaultHomeContent, ...saved } : defaultHomeContent;
    return NextResponse.json({ slug, content: merged });
  }

  return NextResponse.json({ slug, content: await getContent(`page:${slug}`, '') });
}

export async function PUT(request, { params }) {
  const admin = await getCurrentAdmin();
  const slug = (await params).slug;
  if (!canAccess(admin, 'page:write')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });
  if (!allowed.has(slug)) return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  
  const body = await request.json();

  if (slug === 'home') {
    if (!body.content || typeof body.content !== 'object') {
      return NextResponse.json({ error: 'Invalid home page content format' }, { status: 400 });
    }
    await setContent('page:home', body.content);
    await recordActivity({ adminId: admin._id.toString(), action: 'updated', entity: 'page', entityId: 'home' });
    return NextResponse.json({ slug: 'home', content: body.content });
  }

  if (typeof body.content !== 'string' || body.content.length > 200000) {
    return NextResponse.json({ error: 'Invalid page content' }, { status: 400 });
  }
  
  await setContent(`page:${slug}`, body.content);
  await recordActivity({ adminId: admin._id.toString(), action: 'updated', entity: 'page', entityId: slug });
  return NextResponse.json({ slug, content: body.content });
}