import Link from 'next/link';

export const metadata = {
  title: "Disclaimer - Devastate APK",
  description: "Official disclaimer for Devastate APK information, downloads, guides, and third-party trademarks.",
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div
      className="max-w-4xl mx-auto px-6 sm:px-10 py-16"
      style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
    >
      
      {/* Main Heading */}
      <h1
        className="text-4xl sm:text-5xl font-bold text-black uppercase mb-8"
        style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
      >
        Disclaimer
      </h1>

      {/* Intro Text */}
      <div className="text-sm sm:text-base leading-7 text-black/80 space-y-6 mb-12">
        <p>
          The information published on DevastateAPK.net is provided for general informational purposes.
        </p>
        <p>
          We try to keep our content useful and accurate, but we cannot guarantee that every detail will remain correct at all times. Game versions, APK sizes, Android requirements, features, and other information can change.
        </p>
      </div>

      {/* Sections Container */}
      <div className="space-y-12 text-sm sm:text-base leading-7 text-black/80">
        
        {/* APK Files and Sources */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            APK Files and Sources
          </h2>
          <p>
            We may discuss APK files and third-party sources. Always check any file carefully before installation and use a source you trust.
          </p>
          <p className="text-xs sm:text-sm text-black/70">
            We are not responsible for problems caused by files, websites, apps, or services outside our control.
          </p>
        </section>

        {/* Game Information */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Game Information
          </h2>
          <p>
            Devastate belongs to its respective developer or owner. We do not claim ownership of the game's name, artwork, trademarks, or other protected material.
          </p>
        </section>

        {/* External Websites */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            External Websites
          </h2>
          <p>
            Some pages may refer to external websites or services. We do not control their content, security, privacy practices, or availability.
          </p>
        </section>

        {/* Use of Information */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Use of Information
          </h2>
          <p>
            Any action you take based on information found on this website is your own responsibility. Check important details on your device and use trusted sources before installing an APK.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-black">
            If you find incorrect information, please contact us so we can review it.
          </p>
        </section>

      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-4 pt-10 mt-16 border-t border-black/10">
        <Link 
          href="/contact" 
          className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
        >
          Contact Us
        </Link>
        <Link 
          href="/" 
          className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
        >
          Home Page
        </Link>
      </div>

    </div>
  );
}