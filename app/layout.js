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

// Static Site Settings
const siteSettings = {
  siteName: 'Devastate APK',
  siteDescription: 'Download Devastate APK for Android - Anime Simulation Game with 2D visuals and interactive story dialogue.',
  siteUrl: 'https://devastateapk.net/',
  gscVerificationToken: '',
  allowIndexing: true,
  language: 'en',
  gaMeasurementId: 'G-B7XJTZVP43',
};

export function generateMetadata() {
  const metadataBaseUrl = 'https://devastateapk.net';

  return {
    metadataBase: new URL(metadataBaseUrl),
    title: {
      default: `${siteSettings.siteName} Download for Android - Latest Version`,
      template: `%s | ${siteSettings.siteName}`,
    },
    description: siteSettings.siteDescription,
    applicationName: siteSettings.siteName,
    
    authors: [{ name: 'Devastate Team' }],
    creator: 'Devastate Team',
    publisher: siteSettings.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: 'https://devastateapk.net/', // 👈 Yahan seedha exact link trailing slash ke sath likh diya hai
      languages: {
        'en-US': 'https://devastateapk.net/',
        'x-default': 'https://devastateapk.net/',
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
      url: 'https://devastateapk.net/',
      siteName: siteSettings.siteName,
      title: `${siteSettings.siteName} Download for Android - Latest Version`,
      description: siteSettings.siteDescription,
      images: [
        {
          url: '/pic1.webp',
          width: 1200,
          height: 630,
          alt: `${siteSettings.siteName} Official Preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteSettings.siteName} Download for Android`,
      description: siteSettings.siteDescription,
      images: ['/pic1.webp'],
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