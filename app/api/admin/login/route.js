import { NextResponse } from 'next/server';
import { comparePassword, createSessionToken, SESSION_COOKIE } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';
import { recordActivity } from '@/lib/database';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const db = await getDatabase();
    const identifier = (email || process.env.ADMIN_EMAIL || '').trim().toLowerCase();
    const attemptKey = `${identifier}:${request.headers.get('x-forwarded-for') || 'unknown'}`;
    const recentAttempts = db && await db.collection('loginAttempts').countDocuments({
      key: attemptKey,
      success: false,
      createdAt: { $gt: new Date(Date.now() - 15 * 60 * 1000) },
    });
    if (recentAttempts >= 5) return NextResponse.json({ error: 'Too many login attempts. Try again later.' }, { status: 429 });
    const admin = db && await db.collection('admins').findOne({
      email: identifier,
      active: { $ne: false },
    });

    const validPassword = admin?.passwordHash && await comparePassword(password || '', admin.passwordHash);
    if (!admin || !validPassword) {
      if (db) await db.collection('loginAttempts').insertOne({ key: attemptKey, success: false, createdAt: new Date() });
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const token = await createSessionToken(admin);
    await recordActivity({ adminId: admin._id.toString(), action: 'logged_in', entity: 'session' });

    const response = NextResponse.json({ success: true });
    response.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    if (error.message === 'Database is not configured' || error.message === 'ADMIN_SECRET is not configured') {
      return NextResponse.json({ error: 'Admin authentication is not configured' }, { status: 503 });
    }
    console.error('Admin login failed:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
