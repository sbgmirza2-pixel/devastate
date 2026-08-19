export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-normal text-black mb-6 tracking-wide uppercase" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Privacy Policy
      </h1>

      {/* Intro Paragraphs */}
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
        <p>
          Your privacy matters to us. This Privacy Policy explains what information may be collected when you visit the website and how that information may be used.
        </p>
        <p className="font-semibold text-black">
          By using the website, you agree to the practices described on this page.
        </p>
      </div>

      {/* Sections Container */}
      <div className="space-y-10 text-black/80 text-base sm:text-lg leading-relaxed">
        
        {/* Information We Collect */}
        <section className="bg-[#F4F1EA] p-8 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Information We Collect
          </h2>
          <ul className="space-y-3 text-sm sm:text-base font-medium">
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
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Cookies
          </h2>
          <p className="mb-4">
            The website may use cookies to support basic functions, understand visitor activity, improve the site, and support advertising services.
          </p>
          <p className="text-sm text-black/70 italic bg-black/5 p-4 rounded-xl">
            You can control or block cookies through your browser settings.
          </p>
        </section>

        {/* Analytics */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Analytics
          </h2>
          <p>
            Analytics services may collect basic information about how visitors use the website. This helps us understand which pages are useful and where improvements may be needed.
          </p>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Third-Party Services
          </h2>
          <p>
            Some third-party services may use cookies or similar technologies. Their own privacy policies apply to the information they collect.
          </p>
        </section>

        {/* Children’s Privacy */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Children’s Privacy
          </h2>
          <p>
            We do not knowingly collect personal information from children.
          </p>
        </section>

        {/* Policy Changes */}
        <section className="border-t border-black/10 pt-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Policy Changes
          </h2>
          <p>
            This Privacy Policy may change when the website, services, or legal requirements change. Any updated version will appear on this page.
          </p>
        </section>

      </div>

    </div>
  );
}