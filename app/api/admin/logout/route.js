import { NextResponse } from 'next/server';
import { revokeCurrentSession, SESSION_COOKIE } from '@/lib/auth';

export async function POST() {
  await revokeCurrentSession();
  const response = NextResponse.json({ success: true });
  response.cookies.set(SESSION_COOKIE, '', {
    httpOnly: true,
    maxAge: 0,
    path: '/',
  });
  return response;
}
