import JsonLd, { generateApkSchema, generateBreadcrumbSchema } from '@/app/components/JsonLd';

// Static Defaults (Database hatane ke baad yeh values use hongi)
const defaultApk = {
  appName: 'Devastate',
  version: '1.0',
  size: '52.2 MB',
  androidRequired: '6.0+',
  seo: {
    title: 'Download Devastate APK v1.0 for Android - Safe & Verified',
    description: 'Download the latest verified Devastate APK (v1.0, 52.2 MB) for Android 6.0+. Fast, secure, and malware-free installation.',
    canonicalUrl: '/download',
    ogTitle: 'Download Devastate APK v1.0 for Android - Safe & Verified',
    ogDescription: 'Download the latest verified Devastate APK (v1.0, 52.2 MB) for Android 6.0+. Fast, secure, and malware-free installation.',
    ogImage: '/pic1.webp',
  }
};

const siteUrl = 'https://thedevastate.com';

export function generateMetadata() {
  const apk = defaultApk;
  const title = apk.seo.title;
  const description = apk.seo.description;

  return {
    title,
    description,
    alternates: {
      canonical: apk.seo.canonicalUrl,
    },
    openGraph: {
      title: apk.seo.ogTitle,
      description: apk.seo.ogDescription,
      url: '/download',
      images: [apk.seo.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [apk.seo.ogImage],
    },
  };
}

export default function DownloadLayout({ children }) {
  const apk = defaultApk;
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