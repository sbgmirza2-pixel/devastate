import Link from 'next/link';
import OverviewPage from '@/app/overview/page';
import FeaturesPage from '@/app/features/page';
import WhatsNewPage from '@/app/whats-new/page';
import AppInfoPage from '@/app/app-info/page';
import ScreenshotsPage from '@/app/screenshots/page';
import InstallGuidePage from '@/app/install-guide/page';
import FAQsPage from '@/app/faqs/page';
import DownloadPage from '@/app/download/page';

export default function Home() {
  return (
    <div className="w-full mx-0 px-4 sm:px-6 py-12">
      
      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-black mb-6 tracking-tight text-center" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Devastate APK
      </h1>

      {/* Intro Paragraphs */}
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-10 font-normal text-center max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <p>
          Devastate APK is made for Android users who want a high-performance gaming-style app with added controls and a more flexible overall experience. It suits people who prefer extra options beyond the standard app layout.
        </p>
        <p>
          Many users look for it because of features related to custom tweaks, smooth graphics handling, and optimized performance. It can feel more convenient for people who like having more control over their mobile gaming experience.
        </p>
      </div>

      {/* Action Buttons */}
      <div id="download" className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-xl mx-auto mb-16">
        <Link 
          href="/download" 
          className="w-full sm:w-1/2 text-center border-2 border-black bg-black hover:bg-black/90 text-white font-extrabold text-sm tracking-wider px-8 py-5 transition uppercase shadow-md"
        >
          Download APK
        </Link>
        <Link 
          href="/guide" 
          className="w-full sm:w-1/2 text-center border-2 border-black bg-white hover:bg-black hover:text-white text-black font-extrabold text-sm tracking-wider px-8 py-5 transition uppercase shadow-md"
        >
          Install Guide
        </Link>
      </div>

      {/* --- OVERVIEW SECTION --- */}
      <div className="w-full bg-[#F4F1EA] py-16 px-6 max-w-[100vw] mb-12">
        <OverviewPage />
      </div>

      {/* --- APP INFORMATION SECTION --- */}
      <div className="w-full bg-[#F4F1EA] py-16 px-6 max-w-[100vw] mb-12">
        <AppInfoPage />
      </div>

      {/* --- FEATURES SECTION --- */}
      <div className="w-full bg-[#F4F1EA] py-16 px-6 max-w-[100vw] mb-12">
        <FeaturesPage />
      </div>

      {/* --- SCREENSHOTS SECTION --- */}
      <div className="w-full bg-[#F4F1EA] py-16 px-6 max-w-[100vw] mb-12">
        <ScreenshotsPage />
      </div>

      {/* --- HOW TO DOWNLOAD & INSTALL SECTION --- */}
      <div className="w-full bg-[#F4F1EA] py-16 px-6 max-w-[100vw] mb-12">
        <InstallGuidePage />
      </div>

      {/* --- FAQS SECTION --- */}
      <div className="w-full bg-[#F4F1EA] py-16 px-6 max-w-[100vw] mb-12">
        <FAQsPage />
      </div>

      {/* --- WHAT'S NEW SECTION --- */}
      <div className="w-full bg-[#F4F1EA] py-16 px-6 max-w-[100vw] mb-12">
        <WhatsNewPage />
      </div>

      {/* --- DOWNLOAD APK SECTION --- */}
      <div className="w-full bg-[#F4F1EA] py-16 px-6 max-w-[100vw]">
        <DownloadPage />
      </div>

    </div>
  );
}