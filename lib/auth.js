import { cookies } from 'next/headers';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { getDatabase } from './mongodb';

const SESSION_COOKIE = 'devastate_admin';
const SECRET = process.env.ADMIN_SECRET;
const SESSION_TTL = Number(process.env.ADMIN_SESSION_TTL_SECONDS || 28800);

/**
 * Sign a value using HMAC-SHA256
 */
function sign(value) {
  if (!SECRET) throw new Error('ADMIN_SECRET is not configured');
  return crypto.createHmac('sha256', SECRET).update(value).digest('hex');
}

/**
 * Create a signed session token
 * @returns {string} "value.signature"
 */
export async function createSessionToken(admin) {
  const db = await getDatabase();
  if (!db) throw new Error('Database is not configured');
  const token = crypto.randomBytes(32).toString('hex');
  await db.collection('sessions').insertOne({
    tokenHash: sign(token),
    adminId: admin._id,
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + SESSION_TTL * 1000),
  });
  return token;
}

/**
 * Verify a session token signature
 * @param {string} token
 * @returns {boolean}
 */
export function verifySessionToken(token) {
  return Boolean(token && SECRET);
}

/**
 * Check if the current request is authenticated (server-side)
 * @returns {Promise<boolean>}
 */
export async function isAuthenticated() {
  return Boolean(await getCurrentAdmin());
}

export async function hasPermission(permission) {
  const admin = await getCurrentAdmin();
  return canAccess(admin, permission);
}

export function canAccess(admin, permission) {
  return Boolean(admin && (admin.role === 'owner' || admin.permissions?.includes(permission)));
}

export async function getCurrentAdmin() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    const db = await getDatabase();
    if (!token || !db || !SECRET) return null;
    const session = await db.collection('sessions').findOne({
      tokenHash: sign(token),
      expiresAt: { $gt: new Date() },
    });
    if (!session) return null;
    return db.collection('admins').findOne({ _id: session.adminId, active: { $ne: false } });
  } catch {
    return null;
  }
}

export async function revokeCurrentSession() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const db = await getDatabase();
  if (token && db && SECRET) await db.collection('sessions').deleteOne({ tokenHash: sign(token) });
}

export async function hashPassword(password) { return bcrypt.hash(password, 12); }
export async function comparePassword(password, hash) { return bcrypt.compare(password, hash); }

/**
 * Returns the session cookie name
 */
export { SESSION_COOKIE };
