export default function InstallGuidePage() {
  return (
    <div className="w-full text-left">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3 text-left" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        How to Download & Install
      </h2>
      
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <div className="border-b border-black/20 pb-4">
          <h3 className="text-lg font-bold text-black mb-1">Step 1: Download the APK</h3>
          <p className="text-black/80 text-base">Click on the official download button to get the latest APK file directly onto your Android device.</p>
        </div>

        <div className="border-b border-black/20 pb-4">
          <h3 className="text-lg font-bold text-black mb-1">Step 2: Enable Unknown Sources</h3>
          <p className="text-black/80 text-base">Go to your device Settings  Security and enable installation from unknown sources to permit setup.</p>
        </div>

        <div className="border-b border-black/20 pb-4">
          <h3 className="text-lg font-bold text-black mb-1">Step 3: Install and Launch</h3>
          <p className="text-black/80 text-base">Open the downloaded file from your file manager, tap install, and enjoy full control over your app environment.</p>
        </div>
      </div>
    </div>
  );
}