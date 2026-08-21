import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { readData, writeData, formatBytes } from '@/lib/dataUtils';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export const config = {
  api: { bodyParser: false },
};

// POST /api/apk/upload — admin-only, upload APK file and auto-detect size
export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('apkFile');

    if (!file || file.size === 0) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (!file.name.endsWith('.apk')) {
      return NextResponse.json({ error: 'Only .apk files are allowed' }, { status: 400 });
    }

    // Save to public/apk/
    const apkDir = path.join(process.cwd(), 'public', 'apk');
    await mkdir(apkDir, { recursive: true });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `devastate_v${Date.now()}.apk`;
    const filePath = path.join(apkDir, fileName);
    await writeFile(filePath, buffer);

    // Auto-calculate size
    const sizeBytes = buffer.length;
    const sizeFormatted = formatBytes(sizeBytes);
    const localPath = `/apk/${fileName}`;

    // Update apkData.json
    const current = readData('apkData.json');
    const updated = {
      ...current,
      sizeBytes,
      size: sizeFormatted,
      localApkPath: localPath,
      useLocalFile: true,
      downloadUrl: localPath,
      updatedAt: new Date().toISOString().split('T')[0],
    };
    writeData('apkData.json', updated);

    return NextResponse.json({
      success: true,
      fileName,
      size: sizeFormatted,
      sizeBytes,
      path: localPath,
    });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: 'Upload failed: ' + err.message }, { status: 500 });
  }
}
