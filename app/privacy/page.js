import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy - Devastate APK",
  description: "Read the Privacy Policy for Devastate APK to understand how visitor data, cookies, and privacy are protected.",
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div
      className="max-w-4xl mx-auto px-6 sm:px-10 py-16"
      style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
    >
      
      {/* Main Heading */}
      <h1
        className="text-4xl sm:text-5xl font-bold text-black uppercase mb-8 tracking-tight"
        style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
      >
        Privacy Policy
      </h1>

      {/* Intro Text */}
      <div className="text-sm sm:text-base leading-7 text-black/80 space-y-6 mb-12">
        <p>
          Your privacy matters to us. This Privacy Policy explains what information may be collected when you visit the website and how that information may be used.
        </p>
        <p className="font-semibold text-black">
          By using the website, you agree to the practices described on this page.
        </p>
      </div>

      {/* Sections Container */}
      <div className="space-y-12 text-sm sm:text-base leading-7 text-black/80">
        
        {/* Information We Collect */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Information We Collect
          </h2>
          <ul className="space-y-3 text-sm sm:text-base font-medium pl-4">
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>We do not ask visitors to provide personal information just to browse the website.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Some basic technical information may be collected automatically through hosting, analytics, security tools, or similar services. This may include browser type, device details, general location, pages visited, and other basic usage information.</span>
            </li>
          </ul>
        </section>

        {/* Cookies */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Cookies
          </h2>
          <p>
            The website may use cookies to support basic functions, understand visitor activity, improve the site, and support advertising services.
          </p>
          <p className="text-xs sm:text-sm text-black/70 italic">
            You can control or block cookies through your browser settings.
          </p>
        </section>

        {/* Analytics */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Analytics
          </h2>
          <p>
            Analytics services may collect basic information about how visitors use the website. This helps us understand which pages are useful and where improvements may be needed.
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Third-Party Services
          </h2>
          <p>
            Some third-party services may use cookies or similar technologies. Their own privacy policies apply to the information they collect.
          </p>
        </section>

        {/* Children’s Privacy */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Children’s Privacy
          </h2>
          <p>
            We do not knowingly collect personal information from children.
          </p>
        </section>

        {/* Policy Changes */}
        <section className="space-y-4 border-t border-black/10 pt-8">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Policy Changes
          </h2>
          <p>
            This Privacy Policy may change when the website, services, or legal requirements change. Any updated version will appear on this page.
          </p>
        </section>

      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-4 pt-10 mt-16 border-t border-black/10">
        <Link 
          href="/" 
          className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
        >
          Home Page
        </Link>
        <Link 
          href="/contact" 
          className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
        >
          Contact Us
        </Link>
      </div>

    </div>
  );
}