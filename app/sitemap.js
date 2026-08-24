import { getContent } from '@/lib/database';
import { getDatabase } from '@/lib/mongodb';

export default async function sitemap() {
  let siteUrl = 'https://thedevastate.com';
  let blogPosts = [];

  try {
    const settings = await getContent('settings', {});
    if (settings?.siteUrl) {
      siteUrl = settings.siteUrl.replace(/\/+$/, '');
    }
  } catch {}

  const db = await getDatabase();
  blogPosts = db ? await db.collection('blogPosts').find({ status: { $ne: 'draft' } }).toArray() : [];

  const apks = db ? await db.collection('apks').find({ status: 'published' }, { projection: { slug: 1, updatedAt: 1 } }).toArray() : [];

  const now = new Date().toISOString();

  // Static routes
  const staticRoutes = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${siteUrl}/download`, lastModified: now, changeFrequency: 'daily', priority: 0.95 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${siteUrl}/faqs`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${siteUrl}/install-guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${siteUrl}/guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/whats-new`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/screenshots`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${siteUrl}/system-readout`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/disclaimer`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/dmca`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ];

  // Dynamic blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const apkRoutes = apks.filter((apk) => apk.slug).map((apk) => ({ url: `${siteUrl}/download/${apk.slug}`, lastModified: apk.updatedAt || now, changeFrequency: 'weekly', priority: 0.85 }));
  return [...staticRoutes, ...blogRoutes, ...apkRoutes];
}
