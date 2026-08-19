import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-normal text-black mb-6 tracking-wide uppercase" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        About Us
      </h1>

      {/* Intro Paragraphs */}
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
        <p>
          Welcome to DevastateAPK.net, a simple place for people who want clear and useful information about Devastate for Android.
        </p>
        <p>
          Our goal is to make Devastate information easy to find and easy to understand. We cover the game, its features, Android requirements, installation steps, controls, performance, updates, common problems, and other useful details.
        </p>
        <p>
          We keep our content simple and focused. You should be able to find the information you need without going through unnecessary details.
        </p>
      </div>

      {/* What You Can Find Here */}
      <div className="mb-12 bg-[#F4F1EA] p-8 rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
          What You Can Find Here
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-black/80 text-sm sm:text-base font-medium">
          <div className="flex items-center gap-2">✓ Devastate APK details</div>
          <div className="flex items-center gap-2">✓ Android requirements</div>
          <div className="flex items-center gap-2">✓ Device compatibility</div>
          <div className="flex items-center gap-2">✓ Installation help</div>
          <div className="flex items-center gap-2">✓ Gameplay information</div>
          <div className="flex items-center gap-2">✓ Controls and tips</div>
          <div className="flex items-center gap-2">✓ Performance details</div>
          <div className="flex items-center gap-2">✓ Storage requirements</div>
          <div className="flex items-center gap-2">✓ Update information</div>
          <div className="flex items-center gap-2">✓ Common fixes</div>
          <div className="flex items-center gap-2">✓ Permission and safety information</div>
          <div className="flex items-center gap-2">✓ Frequently asked questions</div>
        </div>
      </div>

      {/* Our Goal & Disclaimer */}
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
          Our Goal
        </h2>
        <p>
          We want to provide useful information for players who want to understand Devastate before they install or play it.
        </p>
        <p>
          APK details can change with new versions, so we try to keep important information updated when reliable details are available.
        </p>
        <p className="text-sm text-black/60 italic border-l-2 border-black pl-4 py-1">
          DevastateAPK.net is an independent website and has no official connection with the game's developer unless clearly stated.
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-4 pt-6 border-t border-black/10">
        <Link 
          href="/download" 
          className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
        >
          Download Page
        </Link>
        <Link 
          href="/faqs" 
          className="border-2 border-black bg-white text-black hover:bg-black hover:text-white font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
        >
          View FAQs
        </Link>
      </div>

    </div>
  );
}