import { cookies } from 'next/headers';
import crypto from 'crypto';

const SESSION_COOKIE = 'devastate_admin';
const SECRET = process.env.ADMIN_SECRET || 'devastate-secret-key-change-this';

/**
 * Sign a value using HMAC-SHA256
 */
function sign(value) {
  return crypto.createHmac('sha256', SECRET).update(value).digest('hex');
}

/**
 * Create a signed session token
 * @returns {string} "value.signature"
 */
export function createSessionToken() {
  const value = `admin-${Date.now()}`;
  const sig = sign(value);
  return `${value}.${sig}`;
}

/**
 * Verify a session token signature
 * @param {string} token
 * @returns {boolean}
 */
export function verifySessionToken(token) {
  if (!token) return false;
  const lastDot = token.lastIndexOf('.');
  if (lastDot === -1) return false;
  const value = token.substring(0, lastDot);
  const sig = token.substring(lastDot + 1);
  const expectedSig = sign(value);
  return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expectedSig));
}

/**
 * Check if the current request is authenticated (server-side)
 * @returns {Promise<boolean>}
 */
export async function isAuthenticated() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    return verifySessionToken(token);
  } catch {
    return false;
  }
}

/**
 * Returns the session cookie name
 */
export { SESSION_COOKIE };
