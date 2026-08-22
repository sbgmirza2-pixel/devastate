import { readData } from '@/lib/dataUtils';

export default function manifest() {
  let siteName = 'Devastate APK';
  let siteDescription = 'Download Devastate APK for Android - Anime Simulation Game';

  try {
    const settings = readData('siteSettings.json');
    if (settings?.siteName) siteName = settings.siteName;
    if (settings?.siteDescription) siteDescription = settings.siteDescription;
  } catch {}

  return {
    name: siteName,
    short_name: 'Devastate',
    description: siteDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#E2E6DF',
    theme_color: '#111111',
    icons: [
      {
        src: '/Devastate-fav-icon.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/Devastate-fav-icon.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  };
}
