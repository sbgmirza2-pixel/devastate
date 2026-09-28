export default async function sitemap() {
  const baseUrl = 'https://devastateapk.net';
  const now = new Date().toISOString();

  // Static Pages
  const staticRoutes = [
    '',
    '/download',
    '/blog',
    '/faqs',
    '/install-guide',
    '/guide',
    '/whats-new',
    '/screenshots',
    '/system-readout',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/dmca',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' || route === '/download' || route === '/blog' ? 'daily' : route.includes('guide') || route === '/faqs' || route === '/whats-new' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/download' ? 0.95 : route === '/blog' ? 0.9 : route.includes('guide') || route === '/faqs' ? 0.85 : 0.6,
  }));

  return staticRoutes;
}