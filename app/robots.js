import { getContent } from '@/lib/database';

export default async function robots() {
  let siteUrl = 'https://thedevastate.com';
  let allowIndexing = true;

  try {
    const settings = await getContent('settings', {});
    if (settings?.siteUrl) {
      siteUrl = settings.siteUrl.replace(/\/+$/, '');
    }
    if (settings && typeof settings.allowIndexing === 'boolean') {
      allowIndexing = settings.allowIndexing;
    }
  } catch {}

  if (!allowIndexing) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: `${siteUrl}/sitemap.xml`,
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/',
          '/api',
          '/api/',
          '/_next/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
