export default function ScreenshotsPage() {
  return (
    <div className="w-full text-left py-12 px-6 sm:px-12 lg:px-20">
      {/* Inline style hata diya hai taake global css (Bodoni/Roboto) apply ho jaye */}
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3 text-left">
        Screenshots
      </h2>
      
      <div className="space-y-4 text-black/80 text-base sm:text-lg leading-relaxed mb-8 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <p>
          Explore the in-game interface, control panels, and interactive elements designed for your device.
        </p>
      </div>

      {/* Horizontally Scrolling Container */}
      <div className="w-full overflow-x-auto pb-4 pt-2">
        <div className="flex gap-6 w-max">
          
          {/* Screenshot 1 */}
          <div className="w-[300px] sm:w-[450px] flex-shrink-0 overflow-hidden rounded-xl border-2 border-black/80 shadow-md transition hover:scale-[1.01] duration-300 bg-white">
            <img 
              src="/pic2.webp" 
              alt="Devastate APK Gameplay 1" 
              className="w-full h-auto object-cover aspect-video"
            />
          </div>

          {/* Screenshot 2 */}
          <div className="w-[300px] sm:w-[450px] flex-shrink-0 overflow-hidden rounded-xl border-2 border-black/80 shadow-md transition hover:scale-[1.01] duration-300 bg-white">
            <img 
              src="/pic1.webp" 
              alt="Devastate APK Gameplay 2" 
              className="w-full h-auto object-cover aspect-video"
            />
          </div>

          {/* Screenshot 3 */}
          <div className="w-[300px] sm:w-[450px] flex-shrink-0 overflow-hidden rounded-xl border-2 border-black/80 shadow-md transition hover:scale-[1.01] duration-300 bg-white">
            <img 
              src="/pic4.webp" 
              alt="Devastate APK Gameplay 3" 
              className="w-full h-auto object-cover aspect-video"
            />
          </div>

          {/* Screenshot 4 */}
          <div className="w-[300px] sm:w-[450px] flex-shrink-0 overflow-hidden rounded-xl border-2 border-black/80 shadow-md transition hover:scale-[1.01] duration-300 bg-white">
            <img 
              src="/pic3.webp" 
              alt="Devastate APK Gameplay 4" 
              className="w-full h-auto object-cover aspect-video"
            />
          </div>

        </div>
      </div>
    </div>
  );
}