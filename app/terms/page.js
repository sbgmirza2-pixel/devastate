export default function TermsConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-normal text-black mb-6 tracking-wide uppercase" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Terms & Conditions
      </h1>

      {/* Intro Paragraphs */}
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
        <p>
          Welcome to DevastateAPK.net. By using this website, you agree to follow these Terms & Conditions.
        </p>
        <p className="font-semibold text-black">
          Please read them before using the website or relying on information published here.
        </p>
      </div>

      {/* Sections Container */}
      <div className="space-y-10 text-black/80 text-base sm:text-lg leading-relaxed">
        
        {/* Website Content */}
        <section className="bg-[#F4F1EA] p-8 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Website Content
          </h2>
          <p className="mb-4">
            The website provides information about Devastate, Android apps, APK files, game features, requirements, installation, and related topics.
          </p>
          <p className="text-sm text-black/70">
            We try to keep the information accurate, but game details and APK information can change over time. We cannot guarantee that every detail will always remain complete, current, or error-free.
          </p>
        </section>

        {/* Proper Use */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Proper Use
          </h2>
          <p>
            You agree to use the website for lawful purposes. Do not use it in a way that could harm the website, its users, or its services.
          </p>
        </section>

        {/* External Links */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            External Links
          </h2>
          <p>
            Some pages may contain links to external websites. We do not control those websites, their content, or their policies. You should review their terms before using their services.
          </p>
        </section>

        {/* APK Information */}
        <section className="bg-black/5 p-8 rounded-2xl border-l-4 border-black">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            APK Information
          </h2>
          <p>
            Always check an APK file before installation and use a source you trust. We are not responsible for problems caused by files, websites, apps, or services outside our control.
          </p>
        </section>

        {/* Changes to These Terms */}
        <section className="border-t border-black/10 pt-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Changes to These Terms
          </h2>
          <p>
            These Terms & Conditions may change when necessary. Any updated version will appear on this page.
          </p>
        </section>

      </div>

    </div>
  );
}