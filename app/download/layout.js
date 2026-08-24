import { getContent } from '@/lib/database';
import JsonLd, { generateApkSchema, generateBreadcrumbSchema } from '@/app/components/JsonLd';

export async function generateMetadata() {
  let apk = {};
  let siteSettings = {};
  try {
    apk = await getContent('apk', {}) || {};
    siteSettings = await getContent('settings', {}) || {};
  } catch {}

  const title = apk.seo?.title || `Download ${apk.appName || 'Devastate'} APK v${apk.version || '1.0'} for Android - Safe & Verified`;
  const description = apk.seo?.description || `Download the latest verified ${apk.appName || 'Devastate'} APK (v${apk.version || '1.0'}, ${apk.size || '52.2 MB'}) for Android ${apk.androidRequired || '6.0+'}. Fast, secure, and malware-free installation.`;

  return {
    title,
    description,
    alternates: {
      canonical: apk.seo?.canonicalUrl || '/download',
    },
    openGraph: {
      title: apk.seo?.ogTitle || title,
      description: apk.seo?.ogDescription || description,
      url: '/download',
      images: apk.seo?.ogImage ? [apk.seo.ogImage] : ['/pic1.webp'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: apk.seo?.ogImage ? [apk.seo.ogImage] : ['/pic1.webp'],
    },
  };
}

export default async function DownloadLayout({ children }) {
  let apk = {};
  let siteSettings = {};
  try {
    apk = await getContent('apk', {}) || {};
    siteSettings = await getContent('settings', {}) || {};
  } catch {}

  const siteUrl = siteSettings.siteUrl || 'https://thedevastate.com';
  const apkSchema = generateApkSchema(apk, siteUrl);
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
