import Link from 'next/link';
import { readData } from '@/lib/dataUtils';
import HeroShareButton from './HeroShareButton';

export default function HeroSection() {
  let apk = { rating: '4.8', reviews: '18,995+' };
  try {
    apk = readData('apkData.json');
  } catch {}

  return (
    <div className="w-full mb-12 flex flex-col items-center text-center">
      
      {/* Centered Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 tracking-tight leading-tight">
        {apk.appName || 'Devastate'} APK 
      </h1>

      {/* Center-Aligned Descriptive Paragraphs */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-2 text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-4">
        <p>
          Devastate offers a refreshing change from typical action and arcade games, mixing anime-inspired 2D artwork with character interactions, engaging dialogue, mystery, daily activities, useful items, rewards and plenty of customization.
        </p>
        <p>
          The game takes a slower, more interactive approach. Instead of throwing you into constant combat, it gives you time to explore scenes, follow conversations, interact with characters, complete tasks, collect rewards, and see how the available gameplay develops.
        </p>
        <p>
          If you enjoy simulation games with a visual-novel feel and character-driven content, Devastate is worth a closer look. Below, you'll find its current details, gameplay features, Android requirements, installation method, safety advice, common fixes, and answers to the questions players usually have.
        </p>
      </div>

      {/* Centered Download Button & Info */}
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Link href="/download" className="inline-block bg-black text-white hover:bg-black/90 font-black text-sm tracking-widest px-8 py-4 rounded-xl transition uppercase shadow-md">
            Download {apk.appName || 'Devastate'} APK Now
          </Link>
        </div>

        <div className="flex items-center gap-4 text-sm justify-center">
          <div className="flex items-center gap-1 font-black text-black">
            <span>⭐ {apk.rating} / 5</span>
            <span className="text-black/80 font-bold">({apk.reviews} Reviews)</span>
          </div>
          <span className="text-black/40">|</span>
          <HeroShareButton appName={apk.appName || 'Devastate'} />
        </div>
      </div>

    </div>
  );
}