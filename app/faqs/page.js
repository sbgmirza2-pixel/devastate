export default function FAQsPage() {
  return (
    <div className="w-full text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Page Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Frequently Asked Questions
      </h2>
      
      <p className="text-black/80 text-base sm:text-lg leading-relaxed mb-8">
        Got questions about Devastate APK? Find clear answers to the most common queries below.
      </p>

      {/* FAQs List without Borders */}
      <div className="space-y-6">
        
        {/* FAQ 1 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
          <h3 className="text-lg font-extrabold text-black mb-2 uppercase tracking-wide">
            Is Devastate APK safe to install on my Android device?
          </h3>
          <p className="text-black/80 text-base leading-relaxed">
            Yes! The package is thoroughly scanned and optimized to run smoothly on compatible Android configurations without compromising your device security.
          </p>
        </div>

        {/* FAQ 2 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
          <h3 className="text-lg font-extrabold text-black mb-2 uppercase tracking-wide">
            Do I need to root my phone to run this APK?
          </h3>
          <p className="text-black/80 text-base leading-relaxed">
            No rooting is required. Devastate APK installs and runs normally like any other standard application on standard Android operating systems.
          </p>
        </div>

        {/* FAQ 3 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
          <h3 className="text-lg font-extrabold text-black mb-2 uppercase tracking-wide">
            How do I update to the latest version?
          </h3>
          <p className="text-black/80 text-base leading-relaxed">
            When a new update is released, you can visit our download page again to grab the latest APK build and install it over your existing version.
          </p>
        </div>

        {/* FAQ 4 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
          <h3 className="text-lg font-extrabold text-black mb-2 uppercase tracking-wide">
            What should I do if the installation says "App not installed"?
          </h3>
          <p className="text-black/80 text-base leading-relaxed">
            This usually happens if an older conflicting version is already present on your device, or if unknown sources aren't fully allowed. Try uninstalling the previous build and reinstalling the new package.
          </p>
        </div>

      </div>

    </div>
  );
}