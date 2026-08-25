import { defaultHomeContent } from '@/lib/homeDefaults';

export const metadata = {
  title: "Gameplay Screenshots - Devastate APK",
  description: "View in-game screenshots and visual gallery for Devastate APK anime simulation game on Android.",
  alternates: {
    canonical: '/screenshots',
  },
};

export default function ScreenshotsPage({ content }) {
  const data = content || defaultHomeContent.screenshots;
  const screenshots = data.images && data.images.length > 0 ? data.images : defaultHomeContent.screenshots.images;

  return (
    <section id="screenshots" className="w-full py-10 sm:py-14 bg-transparent text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold text-black mb-3 tracking-wide uppercase border-b-2 border-black pb-3">
          {data.heading || "Screenshots"}
        </h2>
        
        {/* Description */}
        <div 
          className="text-black/80 text-base sm:text-lg leading-relaxed mb-6" 
          style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
        >
          <p>
            {data.description || "Explore the in-game interface, control panels, and interactive elements designed for your device."}
          </p>
        </div>

        {/* Screenshots Container - Mobile: 1 image covers full container width with smooth snap scroll */}
        <div className="w-full overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400">
          <div className="flex sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-4 sm:gap-6 w-full">
            {screenshots.map((item, index) => (
              <div 
                key={index}
                className="w-full min-w-full sm:min-w-0 sm:w-full lg:flex-1 shrink-0 snap-center overflow-hidden rounded-xl border-2 border-black/80 shadow-md transition hover:scale-[1.01] duration-300 bg-white"
              >
                <img 
                  src={item.src} 
                  alt={item.alt || `Gameplay Screenshot ${index + 1}`} 
                  className="w-full h-auto object-cover aspect-video"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 pt-2 text-xs text-black/50 font-medium">
          <span>← Swipe to view all screenshots →</span>
        </div>

      </div>
    </section>
  );
}