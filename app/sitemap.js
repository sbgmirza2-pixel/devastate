export default function sitemap() {
  const baseUrl = 'https://devastateapk.net/';

  const routes = [
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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}