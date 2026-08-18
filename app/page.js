'use client';
import { useState } from 'react';
import Link from 'next/link';
import OverviewPage from '@/app/overview/page';
import FeaturesPage from '@/app/features/page';
import WhatsNewPage from '@/app/whats-new/page';
import AppInfoPage from '@/app/app-info/page';
import ScreenshotsPage from '@/app/screenshots/page';
import InstallGuidePage from '@/app/install-guide/page';
import FAQsPage from '@/app/faqs/page';
import DownloadPage from '@/app/download/page';
import SystemReadoutPage from '@/app/system-readout/page';

export default function Home() {
  const [userRating, setUserRating] = useState(5);
  const [hoverStar, setHoverStar] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Devastate APK',
          text: 'Download Devastate APK for high performance gaming experience.',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full mx-0 px-4 sm:px-6 py-12">
      
      {/* Main Title with Anton Font */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal text-black mb-6 tracking-wide text-center uppercase" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
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
      <div id="download" className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto mb-6">
        <Link 
          href="/download" 
          className="w-full sm:w-1/2 text-center border-2 border-black bg-black hover:bg-black/90 text-white font-extrabold text-sm tracking-wider px-6 py-4 rounded-xl transition uppercase shadow-md"
        >
          Download APK
        </Link>
        <Link 
          href="/guide" 
          className="w-full sm:w-1/2 text-center border-2 border-black bg-white hover:bg-black hover:text-white text-black font-extrabold text-sm tracking-wider px-6 py-4 rounded-xl transition uppercase shadow-md"
        >
          Install Guide
        </Link>
      </div>

      {/* Rating & Share Section (Bigger & Clearer Rating Display) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 text-xs font-bold uppercase tracking-wider">
        
        {/* Larger Rating Stars & Score */}
        <div className="flex items-center gap-2.5">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setUserRating(star)}
                onMouseEnter={() => setHoverStar(star)}
                onMouseLeave={() => setHoverStar(0)}
                className={`text-2xl transition-transform hover:scale-125 focus:outline-none px-0.5 ${
                  (hoverStar || userRating) >= star ? 'text-amber-400' : 'text-gray-300'
                }`}
              >
                ★
              </button>
            ))}
          </div>
          <span className="text-black font-black text-sm ml-1">4.9 / 5</span>
          <span className="text-black/50 font-normal normal-case">(1.4k votes)</span>
        </div>

        {/* Divider dot for desktop */}
        <span className="hidden sm:inline text-black/30">&bull;</span>

        {/* Share Button with Icon */}
        <button
          onClick={handleShare}
          className="flex items-center gap-2 text-black hover:text-amber-600 transition font-extrabold tracking-wider bg-white border-2 border-black/80 px-4 py-2.5 rounded-xl shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
          </svg>
          <span>{copied ? 'Link Copied!' : 'Share App'}</span>
        </button>

      </div>
       {/* --- system readout --- */}
      <div className="w-full bg-[#F4F1EA] py-16 px-6 max-w-[100vw] mb-12">
        <SystemReadoutPage />
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