import Link from 'next/link';

export default function DownloadPage() {
  return (
    <div className="w-full text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3 inline-block" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Download APK
      </h2>
      
      <div className="space-y-4 text-black/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <p>
          Click the button below to download the latest stable build of Devastate APK directly to your device.
        </p>
      </div>

      <div className="max-w-md mx-auto" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <a href="#" className="inline-block w-full sm:w-auto text-center border-2 border-black bg-black hover:bg-black/90 text-white font-extrabold text-sm tracking-wider px-10 py-5 transition uppercase shadow-md mb-4">
          Download v2.4.0 (Secure APK)
        </a>
        <p className="text-xs text-black/60">
          File Size: ~28MB &bull; Requires Android 7.0+
        </p>
      </div>
    </div>
  );
}