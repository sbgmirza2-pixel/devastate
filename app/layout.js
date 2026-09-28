import { Plus_Jakarta_Sans, Roboto } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import JsonLd, { generateWebSiteSchema } from "./components/JsonLd";
import "./globals.css";

const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

// Static Site Settings (Client ki di hui Google Analytics ID yahan direct update kar di hai)
const siteSettings = {
  siteName: 'Devastate APK',
  siteDescription: 'Download Devastate APK for Android - Anime Simulation Game with 2D visuals and interactive story dialogue.',
  siteUrl: 'http://devastateapk.net/',
  gscVerificationToken: '',
  allowIndexing: true,
  language: 'en',
  gaMeasurementId: 'G-B7XJTZVP43', // Direct client Measurement ID added here
};

export function generateMetadata() {
  const siteUrl = siteSettings.siteUrl.replace(/\/+$/, '');

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${siteSettings.siteName} Download for Android - Latest Version`,
      template: `%s | ${siteSettings.siteName}`,
    },
    description: siteSettings.siteDescription,
    applicationName: siteSettings.siteName,
    
    authors: [{ name: 'Devastate DEV' }],
    creator: 'Devastate DEV',
    publisher: siteSettings.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/',
        'x-default': '/',
      },
    },
    icons: {
      icon: [
        { url: '/Devastate-fav-icon.webp' },
        { url: '/Devastate-fav-icon.webp', sizes: '32x32', type: 'image/webp' },
      ],
      apple: [{ url: '/Devastate-fav-icon.webp' }],
      shortcut: ['/Devastate-fav-icon.webp'],
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteUrl,
      siteName: siteSettings.siteName,
      title: `${siteSettings.siteName} Download for Android - Latest Version`,
      description: siteSettings.siteDescription,
      images: [
        {
          url: '/Devastate-fav-icon.webp',
          width: 512,
          height: 512,
          alt: `${siteSettings.siteName} Official Logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteSettings.siteName} Download for Android`,
      description: siteSettings.siteDescription,
      images: ['/Devastate-fav-icon.webp'],
      creator: '@DevastateAPK',
    },
    robots: siteSettings.allowIndexing
      ? {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        }
      : {
          index: false,
          follow: false,
        },
    verification: siteSettings.gscVerificationToken
      ? {
          google: siteSettings.gscVerificationToken,
        }
      : undefined,
  };
}

export default function RootLayout({ children }) {
  const gaId = siteSettings.gaMeasurementId;
  const webSiteSchema = generateWebSiteSchema(siteSettings);

  return (
    <html lang={siteSettings.language} className={`${headingFont.variable} ${roboto.variable}`}>
      <head>
        <JsonLd data={webSiteSchema} />
      </head>
      <body className="bg-[#D1D5DB] text-[#1F2937] min-h-screen flex flex-col justify-between selection:bg-[#544558] selection:text-white antialiased">
        <GoogleAnalytics gaId={gaId} />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}