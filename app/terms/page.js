import Link from 'next/link';

export default function TermsConditionsPage() {
  return (
    <div
      className="max-w-4xl mx-auto px-6 sm:px-10 py-16"
      style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
    >
      
      {/* Main Heading */}
      <h1
        className="text-4xl sm:text-5xl font-bold text-black uppercase mb-6 tracking-tight"
        style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
      >
        Terms & Conditions
      </h1>

      {/* Intro Text */}
      <div className="text-sm sm:text-base leading-7 text-black/80 space-y-3 mb-6">
        <p>
          Welcome to DevastateAPK.net. By using this website, you agree to follow these Terms & Conditions.
        </p>
        <p className="font-semibold text-black">
          Please read them before using the website or relying on information published here.
        </p>
      </div>

      {/* Sections Container */}
      <div className="space-y-12 text-sm sm:text-base leading-7 text-black/80">
        
        {/* Website Content */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Website Content
          </h2>
          <p>
            The website provides information about Devastate, Android apps, APK files, game features, requirements, installation, and related topics.
          </p>
          <p className="text-xs sm:text-sm text-black/70 italic">
            We try to keep the information accurate, but game details and APK information can change over time. We cannot guarantee that every detail will always remain complete, current, or error-free.
          </p>
        </section>

        {/* Proper Use */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Proper Use
          </h2>
          <p>
            You agree to use the website for lawful purposes. Do not use it in a way that could harm the website, its users, or its services.
          </p>
        </section>

        {/* External Links */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            External Links
          </h2>
          <p>
            Some pages may contain links to external websites. We do not control those websites, their content, or their policies. You should review their terms before using their services.
          </p>
        </section>

        {/* APK Information */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            APK Information
          </h2>
          <p>
            Always check an APK file before installation and use a source you trust. We are not responsible for problems caused by files, websites, apps, or services outside our control.
          </p>
        </section>

        {/* Changes to These Terms */}
        <section className="space-y-4 border-t border-black/10 pt-8">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Changes to These Terms
          </h2>
          <p>
            These Terms & Conditions may change when necessary. Any updated version will appear on this page.
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
          href="/privacy-policy" 
          className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
        >
          Privacy Policy
        </Link>
      </div>

    </div>
  );
}