import { NextResponse } from 'next/server';
import { hasPermission } from '@/lib/auth';
import { normalizeBlogContent } from '@/lib/normalizeBlogContent';
import { getDatabase } from '@/lib/mongodb';

// GET /api/blog/[slug] — public
export async function GET(request, { params }) {
  const { slug } = await params;
  try {
    const post = await (await getDatabase()).collection('blogPosts').findOne({ slug, status: { $ne: 'draft' } });
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ ...post, _id: post._id.toString() });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// PUT /api/blog/[slug] — admin-protected, update post
export async function PUT(request, { params }) {
  if (!await hasPermission('blog:write')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });

  const { slug } = await params;
  try {
    const updates = await request.json();
    const db = await getDatabase();
    const current = await db.collection('blogPosts').findOne({ slug });
    if (!current) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    const next = { ...updates, ...(updates.content ? { content: normalizeBlogContent(updates.content) } : {}), updatedAt: new Date() };
    const result = await db.collection('blogPosts').findOneAndUpdate({ _id: current._id }, { $set: next }, { returnDocument: 'after' });
    return NextResponse.json({ ...result, _id: result._id.toString() });
  } catch {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

// DELETE /api/blog/[slug] — admin-protected
export async function DELETE(request, { params }) {
  if (!await hasPermission('blog:delete')) return NextResponse.json({ error: 'Permission denied' }, { status: 403 });

  const { slug } = await params;
  try {
    const db = await getDatabase();
    const result = await db.collection('blogPosts').deleteOne({ slug });
    if (!result.deletedCount) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
