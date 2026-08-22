import Link from 'next/link';

export const metadata = {
  title: "About Us - Devastate APK",
  description: "Learn about Devastate APK, our mission to provide verified Android game guides, APK details, tutorials, and security information.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div
      className="max-w-6xl mx-auto px-12 sm:px-20 lg:px-32 py-16"
      style={{
        fontFamily: 'var(--font-roboto), sans-serif',
      }}
    >
      
      {/* Main Heading */}
      <div className="max-w-4xl">
        <h2
          className="text-4xl sm:text-5xl font-bold text-black uppercase"
          style={{
            fontFamily: 'var(--font-chakra-petch), sans-serif',
          }}
        >
          About Us
        </h2>

        {/* Intro Paragraphs */}
        <div className="text-sm sm:text-base leading-7 text-black/80 mt-5">
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
      </div>

      {/* Main Content */}
      <div className="max-w-4xl space-y-14 text-sm sm:text-base leading-7 text-black/80 mt-14">
        
        {/* Sub-section Heading */}
        <section className="space-y-6">
          <h3
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{
              fontFamily: 'var(--font-chakra-petch), sans-serif',
            }}
          >
            What You Can Find Here
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-xs sm:text-sm font-medium">
            <div>Devastate APK details</div>
            <div>Android requirements</div>
            <div>Device compatibility</div>
            <div>Installation help</div>
            <div>Gameplay information</div>
            <div>Controls and tips</div>
            <div>Performance details</div>
            <div>Storage requirements</div>
            <div>Update information</div>
            <div>Common fixes</div>
            <div>Permission and safety information</div>
            <div>Frequently asked questions</div>
          </div>
        </section>

        {/* Our Goal Section */}
        <section className="space-y-1">
          <h3
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{
              fontFamily: 'var(--font-chakra-petch), sans-serif',
            }}
          >
            Our Goal
          </h3>
          <p>
            We want to provide useful information for players who want to understand Devastate before they install or play it.
          </p>
          <p>
            APK details can change with new versions, so we try to keep important information updated when reliable details are available.
          </p>
          <div className="border-l-2 border-black/20 pl-6 py-2">
            <p className="text-xs sm:text-sm text-black/60 italic">
              DevastateAPK.net is an independent website and has no official connection with the game's developer unless clearly stated.
            </p>
          </div>
        </section>

      </div>

      {/* Quick Links */}
      <div className="max-w-4xl flex flex-wrap gap-4 pt-10 mt-16 border-t border-black/10">
        <Link 
          href="/download" 
          className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
        >
          Download Page
        </Link>
        <Link 
          href="/faqs" 
          className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
        >
          View FAQs
        </Link>
      </div>

    </div>
  );
}