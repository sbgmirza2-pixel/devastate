import { NextResponse } from 'next/server';
import { hasPermission } from '@/lib/auth';
import { getCurrentAdmin } from '@/lib/auth';
import { handleUpload } from '@vercel/blob/client';
import { getDatabase } from '@/lib/mongodb';
import { recordActivity } from '@/lib/database';

const MAX_APK_SIZE = 500 * 1024 * 1024;

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
    if (!process.env.BLOB_READ_WRITE_TOKEN) return NextResponse.json({ error: 'File storage is not configured' }, { status: 503 });

    const body = await request.json();
    if (body.action === 'finalize') {
      const { apkId, url, pathname, sizeBytes } = body;
      if (!apkId || !url || !pathname || !Number.isInteger(sizeBytes) || sizeBytes <= 0 || sizeBytes > MAX_APK_SIZE) {
        return NextResponse.json({ error: 'Invalid APK upload details' }, { status: 400 });
      }
      if (!pathname.toLowerCase().endsWith('.apk')) return NextResponse.json({ error: 'Only .apk files are allowed' }, { status: 400 });

      const db = await getDatabase();
      if (!db) return NextResponse.json({ error: 'Database is not configured' }, { status: 503 });
      const { ObjectId } = await import('mongodb');
      if (!ObjectId.isValid(apkId)) return NextResponse.json({ error: 'Invalid APK id' }, { status: 400 });
      const id = new ObjectId(apkId);
      const size = formatBytes(sizeBytes);
      const result = await db.collection('apks').findOneAndUpdate(
        { _id: id },
        { $set: { sizeBytes, size, localApkPath: url, useLocalFile: true, downloadUrl: url, updatedAt: new Date() } },
        { returnDocument: 'after' }
      );
      if (!result) return NextResponse.json({ error: 'APK version not found' }, { status: 404 });
      const admin = await getCurrentAdmin();
      await recordActivity({ adminId: admin?._id.toString(), action: 'uploaded', entity: 'apk', entityId: apkId, details: { name: result.appName, version: result.version } });
      return NextResponse.json({ success: true, fileName: pathname, size, sizeBytes, path: url, apk: { ...result, _id: result._id.toString() } });
    }

    const uploadResponse = await handleUpload({
      request,
      body,
      onBeforeGenerateToken: async (pathname, clientPayload, multipart) => {
        if (!multipart || !pathname.toLowerCase().endsWith('.apk')) throw new Error('APK uploads must use multipart upload');
        const { apkId } = JSON.parse(clientPayload || '{}');
        if (!apkId) throw new Error('Select and save an APK version before uploading its file');
        return {
          allowedContentTypes: ['application/vnd.android.package-archive', 'application/octet-stream'],
          maximumSizeInBytes: MAX_APK_SIZE,
          addRandomSuffix: true,
        };
      },
    });
    return NextResponse.json(uploadResponse);
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: err.message || 'Upload failed' }, { status: 400 });
  }
}
