export default function AppInfoPage() {
  return (
    <div className="w-full text-left">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3 text-left" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        App Information
      </h2>
      
      <div className="space-y-4 text-black/80 text-base sm:text-lg leading-relaxed mb-8 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <p>
          Get a quick overview of technical specifications, file sizes, and core requirements needed to run Devastate APK smoothly on your Android device.
        </p>
      </div>

      <div className="space-y-4 text-black/80 text-base sm:text-lg leading-relaxed text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <div className="border-b border-black/20 pb-3 flex justify-between">
          <span className="font-bold text-black">App Name:</span>
          <span>Devastate APK</span>
        </div>
        <div className="border-b border-black/20 pb-3 flex justify-between">
          <span className="font-bold text-black">Latest Version:</span>
          <span>v2.4.0</span>
        </div>
        <div className="border-b border-black/20 pb-3 flex justify-between">
          <span className="font-bold text-black">Supported OS:</span>
          <span>Android 7.0 and up</span>
        </div>
        <div className="border-b border-black/20 pb-3 flex justify-between">
          <span className="font-bold text-black">Category:</span>
          <span>Tools / Customization</span>
        </div>
      </div>
    </div>
  );
}