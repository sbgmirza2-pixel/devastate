'use client';

import Link from 'next/link';

export default function HomePage() {
  const specs = [
    { label: "Game Name", value: "Devastate" },
    { label: "Version", value: "1.0" },
    { label: "Developer", value: "Devastate DEV" },
    { label: "Package Name", value: "com.devastate.android" },
    { label: "Category", value: "Simulation" },
    { label: "File Size", value: "52.21 MB" },
    { label: "Android Requirement", value: "Android 6.0+" },
    { label: "File Type", value: "APK" },
    { label: "Platform", value: "Android" },
    { label: "Downloads", value: "286,552+" },
    { label: "Reviews", value: "18,995+" },
    { label: "Rating", value: "4.8/5" },
    { label: "Age Rating", value: "12+" },
  ];

  const preferences = [
    "Anime-inspired games", "Character-driven experiences", "2D visuals",
    "Mystery-based settings", "Interactive conversations", "Simulation gameplay",
    "Item interaction", "Daily activities", "Customization", "Slower story-focused games"
  ];

  const features = [
    { title: "1. Anime-Inspired 2D Presentation", desc: "Uses 2D anime-style artwork for characters and scenes without demanding 3D graphics." },
    { title: "2. Characters, Conversations, and Choices", desc: "Follow conversations, interact with available figures, and move through situations." },
    { title: "3. Items and Interactive Gameplay", desc: "Objects become part of tasks or interactions, giving you more reasons to explore." },
    { title: "4. Daily Tasks and Coin Rewards", desc: "Daily activities provide smaller objectives and rewards like coins for progression." },
    { title: "5. Character Customization", desc: "Outfit options give players control over character appearance where available." },
    { title: "6. Easy Touch-Based Gameplay", desc: "Designed around Android touch input for intuitive menu and item navigation." }
  ];

  const screenshots = [
    { src: "/pic4.webp", alt: "Devastate APK Gameplay 1" },
    { src: "/pic3.webp", alt: "Devastate APK Gameplay 2" },
    { src: "/pic2.webp", alt: "Devastate APK Gameplay 3" },
    { src: "/pic1.webp", alt: "Devastate APK Gameplay 4" }
  ];

  const steps = [
    "Launch the game.", "Explore the main interface.", "Check available scenes.",
    "Follow the current conversation.", "Interact with characters.", "Try available items.",
    "Complete tasks.", "Collect rewards.", "Explore customization options.", "Continue with content."
  ];

  const issues = [
    { title: "APK Installation Fails", desc: "Caused by low storage, incompatible Android versions, or damaged downloads." },
    { title: "The Game Doesn't Open", desc: "Restart your phone, clear cache, or reinstall a clean version." },
    { title: "Black Screen", desc: "Restart the application, clear cache, or reinstall the APK package." },
    { title: "Touch Input Unresponsive", desc: "Restart the app, check emulator settings if applicable, or clear cache." }
  ];

  const faqs = [
    { q: "What is Devastate APK?", a: "Devastate APK is the Android installation package for the Devastate simulation game featuring anime 2D visuals and character interactions." },
    { q: "Is Devastate Free to Play?", a: "Yes, Devastate is free to play on Android with core gameplay accessible without upfront payments." },
    { q: "What is the package name?", a: "The listed package name is com.devastate.android." },
    { q: "Which Android version is required?", a: "The minimum requirement is Android 6.0 or newer." },
    { q: "How large is the APK?", a: "The file size is approximately 52.21 MB." }
  ];

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        navigator.share({ title: 'Devastate APK', url: window.location.href }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-black/60 mb-4">
          Simulation • Anime 2D • Android
        </p>
        <h1 className="text-4xl sm:text-6xl font-normal text-black mb-6 tracking-wide uppercase leading-tight" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
          Devastate APK Download for Android - Anime Simulation Game
        </h1>
        
        {/* Both Paragraphs on Top */}
        <div className="space-y-4 text-base sm:text-lg text-black/80 max-w-3xl mx-auto leading-relaxed mb-8 text-left">
          <p>
            Devastate offers a refreshing change from typical action and arcade games, mixing anime-inspired 2D artwork with character interactions, engaging dialogue, mystery, daily activities, useful items, rewards and plenty of customization.
          </p>
          <div className="bg-[#F4F1EA] p-6 rounded-2xl border border-black/10">
            <p className="mb-3">
              The game takes a slower, more interactive approach. Instead of throwing you into constant combat, it gives you time to explore scenes, follow conversations, interact with characters, complete tasks, collect rewards, and see how the available gameplay develops.
            </p>
            <p>
              If you enjoy simulation games with a visual-novel feel and character-driven content, Devastate is worth a closer look. Below, you'll find its current details, gameplay features, Android requirements, installation method, safety advice, common fixes, and answers to questions.
            </p>
          </div>
        </div>

        {/* Download Button Below Paragraphs */}
        <div className="mb-4">
          <Link href="/download" className="inline-block bg-black text-white hover:bg-black/90 font-extrabold text-sm tracking-widest px-8 py-4 rounded-xl transition uppercase shadow-md">
            Download Devastate APK Now
          </Link>
        </div>

        {/* Rating & Share Section Below Download Button */}
        <div className="max-w-xl mx-auto mb-8 bg-[#F4F1EA] px-6 py-3 rounded-xl flex items-center justify-center gap-4 border border-black/5 text-sm">
          <div className="flex items-center gap-1 font-bold text-black">
            <span>⭐ 4.8 / 5</span>
            <span className="text-black/60 font-normal">(18,995+ Reviews)</span>
          </div>
          <span className="text-black/30">|</span>
          <button 
            onClick={handleShare}
            className="text-black font-bold uppercase tracking-wider hover:underline cursor-pointer text-xs bg-white px-3 py-1.5 rounded-md border border-black/10 shadow-xs"
          >
            Share App
          </button>
        </div>
      </div>

      {/* Game Specifications */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl mb-12 border border-black/10 shadow-sm">
        <h2 className="text-2xl font-bold text-black mb-6 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
          Game Specifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
          {specs.map((item, index) => (
            <div key={index} className="flex justify-between border-b border-black/10 py-2">
              <span className="font-bold text-black/60">{item.label}</span>
              <span className="font-semibold text-black">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Game Overview */}
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
        <h2 className="text-3xl font-bold text-black uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
          What Kind of Game Is Devastate?
        </h2>
        <p>
          Devastate is an anime-style interactive simulation game for Android. Its gameplay revolves around characters, conversations, objects, tasks, rewards, and progression rather than traditional action-focused mechanics.
        </p>
        <div className="bg-[#F4F1EA] p-6 rounded-2xl mt-6">
          <h3 className="text-xl font-bold text-black mb-4 uppercase">It may be a good match if you prefer:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base font-medium">
            {preferences.map((pref, index) => (
              <div key={index} className="flex items-center gap-2">✓ {pref}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Game Features */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-6 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
          Six Things That Stand Out
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div key={index} className="bg-black/5 p-6 rounded-2xl border-l-4 border-black">
              <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
              <p className="text-sm text-black/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="w-full text-left mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3 text-left" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
          Screenshots
        </h2>
        
        <div className="space-y-4 text-black/80 text-base sm:text-lg leading-relaxed mb-8 text-left">
          <p>
            Explore the in-game interface, control panels, and interactive elements designed for your device.
          </p>
        </div>

        {/* 4 Images Landscape Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {screenshots.map((shot, index) => (
            <div key={index} className="w-full overflow-hidden rounded-xl border-2 border-black/80 shadow-md transition hover:scale-[1.01] duration-300 bg-white">
              <img 
                src={shot.src} 
                alt={shot.alt} 
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gameplay Guide */}
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
        <h2 className="text-3xl font-bold text-black uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
          How the Gameplay Comes Together
        </h2>
        <div className="bg-[#F4F1EA] p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-black mb-4 uppercase">A simple starting route:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base font-medium">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Requirements */}
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
        <h2 className="text-3xl font-bold text-black uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
          Android Requirements & Device Compatibility
        </h2>
        <p>
          Before installing, make sure your device meets the listed minimum requirement (Android 6.0 or newer). Keep additional storage available for temporary files and game data.
        </p>
      </div>

      {/* Troubleshooting */}
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
        <h2 className="text-3xl font-bold text-black uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
          Problems You Might Run Into & Fixes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          {issues.map((item, index) => (
            <div key={index} className="bg-black/5 p-6 rounded-2xl">
              <h3 className="font-bold text-black text-base mb-1">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Faq Section */}
      <div className="space-y-6 mb-16">
        <h2 className="text-3xl font-bold text-black uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.slice(0, 3).map((item, index) => (
            <div key={index} className="bg-[#F4F1EA] p-6 rounded-xl">
              <h3 className="font-bold text-black text-lg mb-2">{item.q}</h3>
              <p className="text-black/80 text-sm sm:text-base">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="text-center pt-2">
          <Link href="/faqs" className="inline-block text-black font-bold text-sm tracking-wider uppercase underline hover:text-black/70 transition">
            View All FAQs →
          </Link>
        </div>
      </div>

      {/* Final Words */}
      <div className="bg-black text-white p-8 rounded-2xl text-center space-y-4">
        <h2 className="text-3xl font-bold uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
          Final Words
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Devastate APK offers a unique Android simulation experience centered around anime-inspired visuals, dialogue choices, and character progression. Check your requirements, download from a trusted source, and dive in!
        </p>
        <div className="pt-4">
          <Link href="/download" className="inline-block bg-white text-black hover:bg-gray-200 font-extrabold text-sm tracking-widest px-8 py-4 rounded-xl transition uppercase shadow-lg">
            Download Devastate APK
          </Link>
        </div>
      </div>

    </div>
  );
}