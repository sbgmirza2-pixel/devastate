export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-normal text-black mb-6 tracking-wide uppercase" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Disclaimer
      </h1>

      {/* Intro Paragraphs */}
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
        <p>
          The information published on DevastateAPK.net is provided for general informational purposes.
        </p>
        <p>
          We try to keep our content useful and accurate, but we cannot guarantee that every detail will remain correct at all times. Game versions, APK sizes, Android requirements, features, and other information can change.
        </p>
      </div>

      {/* Sections Container */}
      <div className="space-y-10 text-black/80 text-base sm:text-lg leading-relaxed">
        
        {/* APK Files and Sources */}
        <section className="bg-black/5 p-8 rounded-2xl border-l-4 border-black">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            APK Files and Sources
          </h2>
          <p className="mb-4">
            We may discuss APK files and third-party sources. Always check any file carefully before installation and use a source you trust.
          </p>
          <p className="text-sm text-black/70">
            We are not responsible for problems caused by files, websites, apps, or services outside our control.
          </p>
        </section>

        {/* Game Information */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Game Information
          </h2>
          <p>
            Devastate belongs to its respective developer or owner. We do not claim ownership of the game's name, artwork, trademarks, or other protected material.
          </p>
        </section>

        {/* External Websites */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            External Websites
          </h2>
          <p>
            Some pages may refer to external websites or services. We do not control their content, security, privacy practices, or availability.
          </p>
        </section>

        {/* Use of Information */}
        <section className="bg-[#F4F1EA] p-8 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Use of Information
          </h2>
          <p className="mb-4">
            Any action you take based on information found on this website is your own responsibility. Check important details on your device and use trusted sources before installing an APK.
          </p>
          <p className="text-sm font-semibold text-black">
            If you find incorrect information, please contact us so we can review it.
          </p>
        </section>

      </div>

    </div>
  );
}