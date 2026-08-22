import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

/**
 * Read a JSON data file from the /data directory
 * @param {string} filename e.g. 'apkData.json'
 */
export function readData(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

/**
 * Aggregate public (approved) reviews from reviews.json
 */
export function getReviewStats() {
  try {
    const reviews = (readData('reviews.json') || []).filter((r) => r.approved !== false);
    const total = reviews.length;
    const avgRating =
      total > 0 ? reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) / total : 0;
    return { total, avgRating, reviews };
  } catch {
    return { total: 0, avgRating: 0, reviews: [] };
  }
}

/**
 * Write/overwrite a JSON data file in the /data directory
 * @param {string} filename e.g. 'apkData.json'
 * @param {object} data
 */
export function writeData(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

/**
 * Format bytes to human-readable string e.g. "52.21 MB"
 * @param {number} bytes
 * @returns {string}
 */
export function formatBytes(bytes) {
  if (!bytes || bytes === 0) return '0 Bytes';
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

/**
 * Generate a URL-friendly slug from a string
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
