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
  // Static home content using defaults (no database / admin dependency)
  const home = defaultHomeContent;
  const apk = {}; // Static fallback agar APK data ki zaroorat ho

  return (
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
  );
}