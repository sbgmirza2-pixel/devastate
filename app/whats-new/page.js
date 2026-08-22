export const metadata = {
  title: "What's New in Devastate APK - Changelog & Update History",
  description: "Check the latest version updates, changelogs, bug fixes, and feature releases for Devastate APK on Android.",
  alternates: {
    canonical: '/whats-new',
  },
};

export default function WhatsNewPage() {
  return (
    <div className="w-full text-left">
      
      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3 text-left" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        What's New in Devastate APK
      </h2>

      {/* Intro Paragraph */}
      <div className="space-y-4 text-black/80 text-base sm:text-lg leading-relaxed mb-8 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <p className="text-left">
          Stay up to date with the latest updates, performance enhancements, and new feature rollouts for Devastate APK. We continuously improve our platform to deliver the best possible experience for Android power users.
        </p>
      </div>

      {/* Update Logs / Release Items */}
      <div className="space-y-8 mb-8 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        
        {/* Version Latest */}
        <div className="border-b border-black/20 pb-6 text-left">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-black text-left">Version 2.4.0 — Latest Release</h3>
            <span className="text-xs font-bold bg-black text-white px-3 py-1 uppercase tracking-wider">New</span>
          </div>
          <p className="text-black/80 text-base mb-3 text-left">
            Brings major performance stability improvements alongside advanced graphic control toggles and a redesigned navigation drawer for faster accessibility.
          </p>
          <ul className="list-disc list-inside space-y-1 text-black/80 text-sm sm:text-base text-left">
            <li className="text-left">Optimized resource allocation to prevent lagging during heavy usage.</li>
            <li className="text-left">Enhanced rendering speed for high-framerate environments.</li>
            <li className="text-left">Bug fixes related to background service stability on newer Android versions.</li>
          </ul>
        </div>

        {/* Version Previous */}
        <div className="border-b border-black/20 pb-6 text-left">
          <h3 className="text-xl font-bold text-black mb-2 text-left">Version 2.3.1 — Performance Patch</h3>
          <p className="text-black/80 text-base mb-3 text-left">
            Focused heavily on reducing memory footprint and fine-tuning lightweight execution protocols.
          </p>
          <ul className="list-disc list-inside space-y-1 text-black/80 text-sm sm:text-base text-left">
            <li className="text-left">Reduced overall APK memory consumption by 15%.</li>
            <li className="text-left">Improved UI layout scaling for smaller tablet screens.</li>
          </ul>
        </div>

      </div>

      {/* Outro */}
      <div className="space-y-4 text-black/80 text-base sm:text-lg leading-relaxed text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <p className="text-left">
          Make sure to keep your application updated to enjoy uninterrupted performance and newly added features as they roll out.
        </p>
      </div>

    </div>
  );
}