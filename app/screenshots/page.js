export default function ScreenshotsPage() {
  return (
    <div className="w-full text-left">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3 text-left" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Screenshots
      </h2>
      
      <div className="space-y-4 text-black/80 text-base sm:text-lg leading-relaxed mb-8 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <p>
          Explore the in-game interface, control panels, and interactive elements designed for your device.
        </p>
      </div>

      {/* 4 Images Landscape Grid (2 columns on tablet/desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        
        {/* Screenshot 1 */}
        <div className="w-full overflow-hidden rounded-xl border-2 border-black/80 shadow-md transition hover:scale-[1.01] duration-300 bg-white">
          <img 
            src="/pic4.webp" 
            alt="Devastate APK Gameplay 1" 
            className="w-full h-auto object-cover aspect-video"
          />
        </div>

        {/* Screenshot 2 */}
        <div className="w-full overflow-hidden rounded-xl border-2 border-black/80 shadow-md transition hover:scale-[1.01] duration-300 bg-white">
          <img 
            src="/pic3.webp" 
            alt="Devastate APK Gameplay 2" 
            className="w-full h-auto object-cover aspect-video"
          />
        </div>

        {/* Screenshot 3 */}
        <div className="w-full overflow-hidden rounded-xl border-2 border-black/80 shadow-md transition hover:scale-[1.01] duration-300 bg-white">
          <img 
            src="/pic2.webp" 
            alt="Devastate APK Gameplay 3" 
            className="w-full h-auto object-cover aspect-video"
          />
        </div>

        {/* Screenshot 4 */}
        <div className="w-full overflow-hidden rounded-xl border-2 border-black/80 shadow-md transition hover:scale-[1.01] duration-300 bg-white">
          <img 
            src="/pic1.webp" 
            alt="Devastate APK Gameplay 4" 
            className="w-full h-auto object-cover aspect-video"
          />
        </div>

      </div>
    </div>
  );
}