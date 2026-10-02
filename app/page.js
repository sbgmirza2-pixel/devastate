import HeroSection from './components/HeroSection';
import GameSpecs from './components/GameSpecs';
import WhatIsDevastate from './components/WhatIsDevastate';
import GameFeatures from './components/GameFeatures';
import GamePlayGuide from './components/GameplayGuide';
import DeviceCompatibility from './components/DeviceCapability';
import WhatMakesDifferent from './components/WhtasMakeDifferent';
import HowToUpdate from './components/HowtoUpdate';
import BeforeYouInstall from './components/BeforeYouInstall';
import HowToDownload from './components/HowtoDownload';
import HowtoInstall from './components/HowtoInstall';
import CommonProblems from './components/CommonProblems';
import PropsandCorn from './components/PropsandCorn';
import FaqSection from './components/FaqSection';
import FinalWords from './components/FinalWords';
import ScreenshotsPage from './screenshots/page';
import { defaultHomeContent } from '@/lib/homeDefaults';

const SITE_URL = 'https://devastateapk.net';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Devastate APK Download for Android - Anime Simulation Game",
  description: "Download Devastate APK for Android and enjoy an anime-style simulation game with 2D visuals, character stories, dialogue choices, daily tasks, items, coins, outfits, and more.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Devastate APK Download for Android - Anime Simulation Game",
    description: "Download Devastate APK for Android and enjoy an anime-style simulation game with 2D visuals, character stories, dialogue choices, daily tasks, items, coins, outfits, and more.",
    url: SITE_URL,
    siteName: 'Devastate APK',
    locale: 'en_US',
    type: 'website',
    images: ['/pic1.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Devastate APK Download for Android - Anime Simulation Game",
    description: "Download Devastate APK for Android and enjoy an anime-style simulation game.",
    images: ['/pic1.webp'],
  },
};

export default function HomePage() {
  const home = defaultHomeContent;
  const apk = {}; 

  // --- COMPREHENSIVE CONTENT SCHEMA (Updated author name to Devastate Team) ---
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Devastate APK",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "description": "Download Devastate APK for Android and enjoy an anime-style simulation game with 2D visuals, character stories, dialogue choices, daily tasks, items, coins, outfits, and more.",
    "datePublished": "2026-01-01T08:00:00+00:00",
    "dateModified": "2026-09-29T12:00:00+00:00",
    "author": {
      "@type": "Organization", // Changed from Person to Organization / Team
      "name": "Devastate Team",
      "url": `${SITE_URL}/`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Devastate DEV",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/Devastate-fav-icon.webp`
      }
    },
    "offers": {
      "@type": "Offer",
      "@id": `${SITE_URL}/#offer`,
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to download Devastate APK for Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can download the latest version of Devastate APK safely from our official download page by clicking the download button."
        }
      },
      {
        "@type": "Question",
        "name": "Is Devastate APK safe to install?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the APK file is thoroughly scanned, secure, and compatible with supported Android versions."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="w-full flex flex-col" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <HeroSection content={home.hero} apkData={apk} />
        <GameSpecs content={home.specs} apkData={apk} />
        <ScreenshotsPage content={home.screenshots} />
        <WhatIsDevastate content={home.whatIs} />
        <GameFeatures content={home.features} />  
        <GamePlayGuide content={home.gameplay} />
        <DeviceCompatibility content={home.requirements} />
        <WhatMakesDifferent content={home.different} />
        <HowToUpdate content={home.update} />
        <BeforeYouInstall content={home.beforeInstall} />
        <HowToDownload content={home.download} />
        <HowtoInstall content={home.install} />
        <CommonProblems content={home.problems} />
        <PropsandCorn content={home.prosCons} />
        <FaqSection content={home.faq} />
        <FinalWords content={home.finalWords} />
      </main>
    </>
  );
}