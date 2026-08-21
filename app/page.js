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

export const metadata = {
  title: "Devastate APK Download for Android - Anime Simulation Game",
  description: "Download Devastate APK for Android and enjoy an anime-style simulation game with 2D visuals, character stories, dialogue choices, daily tasks, items, coins, outfits, and more.",
};

export default function HomePage() {
  return (
    <div className="w-full px-12 py-12" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
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