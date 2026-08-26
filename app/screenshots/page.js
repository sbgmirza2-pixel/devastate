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
    <section id="screenshots" className="w-full py-12 md:py-16 bg-transparent text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight uppercase inline-block border-b-4 border-black pb-2">
            {data.heading || "Gameplay Screenshots"}
          </h2>
        </div>
        
        {/* Description */}
        <div 
          className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-8 max-w-4xl" 
          style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
        >
          <p>
            {data.description || "Explore the in-game interface, graphics, and immersive action captured directly from the game."}
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="w-full overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-black scrollbar-track-neutral-200">
          <div className="flex gap-6 w-max">
            {screenshots.map((item, index) => (
              <div 
                key={index}
                className="w-[calc(100vw-3rem)] sm:w-[450px] md:w-[540px] shrink-0 snap-center group relative overflow-hidden rounded-xl border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="overflow-hidden aspect-video w-full bg-neutral-100">
                  <img 
                    src={item.src} 
                    alt={item.alt || `Gameplay Screenshot ${index + 1}`} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Swipe Hint for Users */}
        <div className="flex items-center justify-center gap-1.5 pt-2 text-xs text-neutral-500 font-medium">
          <span>← Swipe horizontally to view all screenshots →</span>
        </div>

      </div>
    </section>
  );
}