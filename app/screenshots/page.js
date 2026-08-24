export const metadata = {
  title: "Gameplay Screenshots - Devastate APK",
  description: "View in-game screenshots and visual gallery for Devastate APK anime simulation game on Android.",
  alternates: {
    canonical: '/screenshots',
  },
};

export default function ScreenshotsPage() {
  const screenshots = [
    { src: "/pic2.webp", alt: "Devastate APK Gameplay 1" },
    { src: "/pic1.webp", alt: "Devastate APK Gameplay 2" },
    { src: "/pic4.webp", alt: "Devastate APK Gameplay 3" },
    { src: "/pic3.webp", alt: "Devastate APK Gameplay 4" },
  ];

  return (
    <div className="w-full text-left py-8 px-4 sm:px-10 lg:px-20">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-bold text-black mb-4 tracking-wide uppercase border-b-2 border-black pb-3">
        Screenshots
      </h2>
      
      {/* Description */}
      <div 
        className="text-black/80 text-base sm:text-lg leading-relaxed mb-6" 
        style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
      >
        <p>
          Explore the in-game interface, control panels, and interactive elements designed for your device.
        </p>
      </div>

      {/* Screenshots Container - Mobile pe clean vertical/grid ya smooth horizontal scroll */}
      <div className="w-full overflow-x-auto pb-4 pt-2 scrollbar-thin scrollbar-thumb-gray-300">
        <div className="flex sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-4 sm:gap-6 w-max sm:w-full">
          {screenshots.map((item, index) => (
            <div 
              key={index}
              className="w-[280px] xs:w-[320px] sm:w-full flex-shrink-0 sm:flex-shrink overflow-hidden rounded-xl border-2 border-black/80 shadow-md transition hover:scale-[1.01] duration-300 bg-white"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}