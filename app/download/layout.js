import { readData, getReviewStats } from '@/lib/dataUtils';
import JsonLd, { generateApkSchema, generateBreadcrumbSchema } from '@/app/components/JsonLd';

export async function generateMetadata() {
  let apk = {};
  let siteSettings = {};
  try {
    apk = readData('apkData.json') || {};
    siteSettings = readData('siteSettings.json') || {};
  } catch {}

  const title = `Download ${apk.appName || 'Devastate'} APK v${apk.version || '1.0'} for Android - Safe & Verified`;
  const description = `Download the latest verified ${apk.appName || 'Devastate'} APK (v${apk.version || '1.0'}, ${apk.size || '52.2 MB'}) for Android ${apk.androidRequired || '6.0+'}. Fast, secure, and malware-free installation.`;

  return {
    title,
    description,
    alternates: {
      canonical: '/download',
    },
    openGraph: {
      title,
      description,
      url: '/download',
      images: ['/pic1.webp'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/pic1.webp'],
    },
  };
}

export default function DownloadLayout({ children }) {
  let apk = {};
  let siteSettings = {};
  try {
    apk = readData('apkData.json') || {};
    siteSettings = readData('siteSettings.json') || {};
  } catch {}

  const siteUrl = siteSettings.siteUrl || 'https://thedevastate.com';
  const apkSchema = generateApkSchema(apk, siteUrl, getReviewStats());
  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: 'Home', url: '/' },
      { name: 'Download Devastate APK', url: '/download' },
    ],
    siteUrl
  );

  return (
    <>
      <JsonLd data={apkSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
