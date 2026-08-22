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
import JsonLd, { generateApkSchema } from './components/JsonLd';
import { readData } from '@/lib/dataUtils';

export const metadata = {
  title: "Devastate APK Download for Android - Anime Simulation Game",
  description: "Download Devastate APK for Android and enjoy an anime-style simulation game with 2D visuals, character stories, dialogue choices, daily tasks, items, coins, outfits, and more.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Devastate APK Download for Android - Anime Simulation Game",
    description: "Download Devastate APK for Android and enjoy an anime-style simulation game with 2D visuals, character stories, dialogue choices, daily tasks, items, coins, outfits, and more.",
    url: '/',
    images: ['/pic1.webp'],
  },
};

export default function HomePage() {
  let apk = {};
  let siteSettings = {};
  try {
    apk = readData('apkData.json') || {};
    siteSettings = readData('siteSettings.json') || {};
  } catch {}

  const apkSchema = generateApkSchema(apk, siteSettings.siteUrl || 'https://thedevastate.com');

  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 py-10" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      <JsonLd data={apkSchema} />
      <HeroSection />
      <GameSpecs />
      <ScreenshotsPage />
      <WhatIsDevastate />
      <GameFeatures />  
      <GamePlayGuide />
      <DeviceCompatibility />
      <WhatMakesDifferent />
      <HowToUpdate />
      <BeforeYouInstall />
      <HowToDownload />
      <HowtoInstall />
      <CommonProblems />
      <PropsandCorn />
      <FaqSection />
      <FinalWords />
    </div>
  );
}