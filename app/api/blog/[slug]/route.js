import { NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/dataUtils';
import { isAuthenticated } from '@/lib/auth';
import { normalizeBlogContent } from '@/lib/normalizeBlogContent';

// GET /api/blog/[slug] — public
export async function GET(request, { params }) {
  const { slug } = await params;
  try {
    const posts = readData('blogPosts.json');
    const post = posts.find((p) => p.slug === slug);
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// PUT /api/blog/[slug] — admin-protected, update post
export async function PUT(request, { params }) {
  const authed = await isAuthenticated();
  if (!authed) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { slug } = await params;
  try {
    const updates = await request.json();
    const posts = readData('blogPosts.json');
    const index = posts.findIndex((p) => p.slug === slug);
    if (index === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    posts[index] = {
      ...posts[index],
      ...updates,
      ...(updates.content ? { content: normalizeBlogContent(updates.content) } : {}),
    };
    writeData('blogPosts.json', posts);
    return NextResponse.json(posts[index]);
  } catch {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

// DELETE /api/blog/[slug] — admin-protected
export async function DELETE(request, { params }) {
  const authed = await isAuthenticated();
  if (!authed) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { slug } = await params;
  try {
    const posts = readData('blogPosts.json');
    const filtered = posts.filter((p) => p.slug !== slug);
    if (filtered.length === posts.length) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    writeData('blogPosts.json', filtered);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
