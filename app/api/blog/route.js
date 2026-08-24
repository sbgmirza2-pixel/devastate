import { NextResponse } from 'next/server';
import { hasPermission } from '@/lib/auth';
import { normalizeBlogContent } from '@/lib/normalizeBlogContent';
import { getDatabase } from '@/lib/mongodb';

// GET /api/blog — public, returns all blog posts
export async function GET() {
  try {
    const posts = await (await getDatabase()).collection('blogPosts').find({ status: { $ne: 'draft' } }).sort({ date: -1, createdAt: -1 }).toArray();
    posts.forEach((post) => { post._id = post._id.toString(); });
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

// POST /api/blog — admin-protected, add new post
export async function POST(request) {
  if (!await hasPermission('blog:write')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const newPost = await request.json();

    // Validate required fields
    if (!newPost.slug || !newPost.title || !newPost.content) {
      return NextResponse.json({ error: 'Missing required fields: slug, title, content' }, { status: 400 });
    }

    const post = {
      status: newPost.status === 'draft' ? 'draft' : 'published',
      date: new Date().toISOString().split('T')[0],
      ...newPost,
      content: normalizeBlogContent(newPost.content),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const result = await (await getDatabase()).collection('blogPosts').insertOne(post);
    return NextResponse.json({ ...post, _id: result.insertedId.toString() }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
