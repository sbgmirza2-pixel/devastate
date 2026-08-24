import { NextResponse } from 'next/server';
import { hasPermission } from '@/lib/auth';
import { put } from '@vercel/blob';

// POST /api/upload — upload images for blog covers and inline content
export async function POST(request) {
  if (!await hasPermission('media:write')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') || formData.get('image');

    if (!file || file.size === 0 || file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const allowedExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];
    const originalName = file.name || 'image.png';
    const ext = path.extname(originalName).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      return NextResponse.json(
        { error: `Unsupported image format. Allowed: ${allowedExtensions.join(', ')}` },
        { status: 400 }
      );
    }

    if (!process.env.BLOB_READ_WRITE_TOKEN) return NextResponse.json({ error: 'Media storage is not configured' }, { status: 503 });
    const blob = await put(`uploads/${Date.now()}-${originalName.replace(/[^a-zA-Z0-9._-]/g, '-')}`, file, { access: 'public' });

    return NextResponse.json({
      success: true,
      url: blob.url,
      fileName: blob.pathname,
      size: file.size,
    });
  } catch (error) {
    console.error('Image upload failed:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
