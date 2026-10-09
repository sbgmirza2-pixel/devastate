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

export default function HomePage() {
  const home = defaultHomeContent;
  const apk = {}; 

  // 1. WebSite Schema
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Devastate APK",
    "url": `${SITE_URL}/`,
    "description": "Download Devastate APK v1.0 for Android and enjoy a 2D anime simulation with character stories, dialogue choices, daily tasks, items, coins, and outfits.",
    "inLanguage": "en",
    "publisher": {
      "@type": "Organization",
      "name": "Devastate DEV",
      "url": `${SITE_URL}/`,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/favicon.ico`
      }
    }
  };

  // 2. MobileApplication Schema
  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Devastate APK",
    "url": `${SITE_URL}/`,
    "description": "Download Devastate APK v1.0 for Android and enjoy a 2D anime simulation with character stories, dialogue choices, daily tasks, items, coins, and outfits.",
    "applicationCategory": "GameApplication",
    "operatingSystem": "ANDROID",
    "image": `${SITE_URL}/pic1.webp`,
    "downloadUrl": `${SITE_URL}/`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "18995",
      "reviewCount": "18995"
    },
    "offers": {
      "@type": "Offer",
      "price": 0,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Organization",
      "name": "Devastate Team"
    }
  };

  // 3. WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Devastate APK Download for Android - Anime Simulation Game",
    "url": `${SITE_URL}/`,
    "description": "Download Devastate APK v1.0 for Android and enjoy a 2D anime simulation with character stories, dialogue choices, daily tasks, items, coins, and outfits.",
    "inLanguage": "en",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/pic1.webp`
    },
    "datePublished": "2026-08-05",
    "dateModified": "2026-08-05",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Devastate APK",
      "url": `${SITE_URL}/`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Devastate DEV"
    },
    "breadcrumb": {
      "@id": `${SITE_URL}/#breadcrumb`
    }
  };

  // 4. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_URL}/`
      }
    ]
  };

  // 5. FAQ Schema
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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