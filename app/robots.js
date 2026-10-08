export default function robots() {
  const siteUrl = 'https://devastateapk.net';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}