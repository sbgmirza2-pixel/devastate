import { NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/dataUtils';
import { isAuthenticated } from '@/lib/auth';

// GET /api/blog — public, returns all blog posts
export async function GET() {
  try {
    const posts = readData('blogPosts.json');
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

// POST /api/blog — admin-protected, add new post
export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const newPost = await request.json();

    // Validate required fields
    if (!newPost.slug || !newPost.title || !newPost.content) {
      return NextResponse.json({ error: 'Missing required fields: slug, title, content' }, { status: 400 });
    }

    const posts = readData('blogPosts.json');

    // Check for duplicate slug
    if (posts.find((p) => p.slug === newPost.slug)) {
      return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 409 });
    }

    const post = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      ...newPost,
    };

    posts.unshift(post); // newest first
    writeData('blogPosts.json', posts);

    return NextResponse.json(post, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
