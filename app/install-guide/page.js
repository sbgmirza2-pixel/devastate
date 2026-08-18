export default function InstallGuidePage() {
  return (
    <div className="w-full text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Page Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        How to Download & Install
      </h2>
      
      <p className="text-black/80 text-base sm:text-lg leading-relaxed mb-8">
        Follow these simple, step-by-step instructions to safely download and install Devastate APK on your Android device.
      </p>

      {/* Steps Grid / List */}
      <div className="space-y-6">
        
        {/* Step 1 */}
        <div className="bg-white border-2 border-black/80 p-6 rounded-xl shadow-sm flex flex-col sm:flex-row gap-6 items-start">
          <div className="bg-black text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
            01
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-black mb-1 uppercase tracking-wide">
              Download the APK File
            </h3>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed">
              Click on the <strong className="text-black">Download</strong> button in the navigation or home page to get the latest version of the Devastate APK package directly onto your device storage.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white border-2 border-black/80 p-6 rounded-xl shadow-sm flex flex-col sm:flex-row gap-6 items-start">
          <div className="bg-black text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
            02
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-black mb-1 uppercase tracking-wide">
              Enable Unknown Sources
            </h3>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed">
              Since this is an APK package, your Android device might require permission to install apps from external sources. Go to <strong className="text-black">Settings &gt; Security / Privacy</strong> and enable <strong className="text-black">Install Unknown Apps</strong> for your browser or file manager.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white border-2 border-black/80 p-6 rounded-xl shadow-sm flex flex-col sm:flex-row gap-6 items-start">
          <div className="bg-black text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
            03
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-black mb-1 uppercase tracking-wide">
              Install and Launch
            </h3>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed">
              Open your phone’s <strong className="text-black">Downloads</strong> folder, tap on the downloaded Devastate APK file, click <strong className="text-black">Install</strong>, and once finished, tap <strong className="text-black">Open</strong> to enjoy the experience!
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}