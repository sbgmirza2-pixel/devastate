import Link from 'next/link';
import HeroShareButton from './HeroShareButton';
import { defaultHomeContent } from '@/lib/homeDefaults';

export default async function HeroSection({ content, apkData }) {
  const apk = apkData || {};
  const hero = content || defaultHomeContent.hero;

  const appName = apk.appName || hero.heading?.replace(/\s+APK$/i, '') || 'Devastate';
  const headingText = hero.heading ? hero.heading.replace('Devastate', appName) : `${appName} APK`;

  return (
    <section className="w-full pt-6 pb-12 sm:pt-10 sm:pb-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Centered Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
          {headingText}
        </h1>

        {/* Center-Aligned Descriptive Paragraphs */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-3 text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
          {(hero.paragraphs || []).map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Centered Download Button & Info */}
        <div className="flex flex-col items-center gap-5 w-full">
          <div>
            <Link 
              href="/download" 
              className="inline-block bg-black text-white hover:bg-black/90 font-black text-xs sm:text-sm tracking-widest px-8 py-4 rounded-xl transition uppercase shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200"
            >
              {hero.buttonText ? hero.buttonText.replace('Devastate', appName) : `Download ${appName} APK Now`}
            </Link>
          </div>

          {/* White Theme Bordered Box - 50/50 split (Half Rating & Half Share Button with Divider) */}
         <div className="w-fit max-w-full mx-auto flex items-stretch bg-white border border-black/20 rounded-2xl shadow-sm overflow-hidden">
 
  {/* Rating */}
  <div
    className="flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-3 select-none text-center bg-white whitespace-nowrap"
    aria-label={`Rated ${hero.ratingScore || '4.5/5'} from ${hero.ratingReviews || '19k reviews'}`}
  >
    <span className="flex items-center text-sm sm:text-base leading-none tracking-wide" aria-hidden="true">
      <span className="text-amber-500">★★★★</span>
      <span className="relative inline-block text-black/15">
        ★
        <span className="absolute inset-y-0 left-0 w-1/2 overflow-hidden text-amber-500">
          ★
        </span>
      </span>
    </span>

    <span className="text-[11px] sm:text-xs font-bold text-black/80 whitespace-nowrap">
      {hero.ratingScore || '4.5/5'} · {hero.ratingReviews || '19k reviews'}
    </span>
  </div>

  {/* Divider + Share */}
  <div className="flex items-stretch bg-white border-l border-black/20">
    <HeroShareButton appName={appName} />
  </div>

</div>
        </div>

      </div>
    </section>
  );
}