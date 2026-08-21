import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// POST /api/upload — upload images for blog covers and inline content
export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') || formData.get('image');

    if (!file || file.size === 0) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const allowedExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'];
    const originalName = file.name || 'image.png';
    const ext = path.extname(originalName).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      return NextResponse.json(
        { error: `Unsupported image format. Allowed: ${allowedExtensions.join(', ')}` },
        { status: 400 }
      );
    }

    // Save to public/uploads/
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadsDir, { recursive: true });

    const sanitizedBase = path
      .basename(originalName, ext)
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, '-');
    const fileName = `${sanitizedBase}-${Date.now()}${ext}`;
    const filePath = path.join(uploadsDir, fileName);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    const url = `/uploads/${fileName}`;

    return NextResponse.json({
      success: true,
      url,
      fileName,
      size: file.size,
    });
  } catch (error) {
    console.error('Image upload failed:', error);
    return NextResponse.json({ error: 'Upload failed: ' + error.message }, { status: 500 });
  }
}
