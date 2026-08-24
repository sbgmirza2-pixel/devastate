import { NextResponse } from 'next/server';
import { hasPermission } from '@/lib/auth';
import { put } from '@vercel/blob';
import { getDatabase } from '@/lib/mongodb';
import { recordActivity } from '@/lib/database';

function formatBytes(bytes) {
  if (!bytes) return '0 Bytes';
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, index)).toFixed(2)} ${sizes[index]}`;
}

// POST /api/apk/upload — admin-only, upload APK file and auto-detect size
export async function POST(request) {
  if (!await hasPermission('apk:write')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('apkFile');

    if (!file || file.size === 0 || file.size > 500 * 1024 * 1024) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (!file.name.endsWith('.apk')) {
      return NextResponse.json({ error: 'Only .apk files are allowed' }, { status: 400 });
    }

    if (!process.env.BLOB_READ_WRITE_TOKEN) return NextResponse.json({ error: 'File storage is not configured' }, { status: 503 });
    const blob = await put(`apk/devastate-${Date.now()}.apk`, file, { access: 'public' });

    // Auto-calculate size
    const sizeBytes = file.size;
    const sizeFormatted = formatBytes(sizeBytes);
    const localPath = blob.url;
    const apkId = formData.get('apkId');

    if (!apkId) return NextResponse.json({ error: 'Select and save an APK version before uploading its file' }, { status: 400 });

    const db = await getDatabase();
    if (!db) return NextResponse.json({ error: 'Database is not configured' }, { status: 503 });
    const { ObjectId } = await import('mongodb');
    if (!ObjectId.isValid(apkId)) return NextResponse.json({ error: 'Invalid APK id' }, { status: 400 });
    const id = new ObjectId(apkId);
    const result = await db.collection('apks').findOneAndUpdate(
      { _id: id },
      { $set: { sizeBytes, size: sizeFormatted, localApkPath: localPath, useLocalFile: true, downloadUrl: localPath, updatedAt: new Date() } },
      { returnDocument: 'after' }
    );
    if (!result) return NextResponse.json({ error: 'APK version not found' }, { status: 404 });
    const admin = await (await import('@/lib/auth')).getCurrentAdmin();
    await recordActivity({ adminId: admin?._id.toString(), action: 'uploaded', entity: 'apk', entityId: apkId, details: { name: result.appName, version: result.version } });
    return NextResponse.json({ success: true, fileName: blob.pathname, size: sizeFormatted, sizeBytes, path: localPath, apk: { ...result, _id: result._id.toString() } });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
