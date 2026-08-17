export default function OverviewPage() {
  return (
    <div className="w-full px-2 sm:px-4 mx-0 text-left">
      {/* Full Width Content Layout (No Sidebar) */}
      <div className="w-full">
        
        {/* Heading with Anton font */}
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3 text-left" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
          What Is Devastate APK?
        </h2>

        {/* Intro Paragraphs */}
        <div className="space-y-4 text-black/80 text-base sm:text-lg leading-relaxed mb-8 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
          <p>
            Devastate APK is made for Android users who want a high-performance gaming-style app with added controls and a more flexible overall experience. It suits people who prefer extra options beyond the standard app layout.
          </p>
          <p>
            Many users look for it because of features related to custom tweaks, smooth graphics handling, and optimized performance. It can feel more convenient for people who like having more control over their mobile gaming experience.
          </p>
        </div>

        {/* Overview List Grid / Items */}
        <div className="space-y-6 mb-8 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
          
          <div className="border-b border-black/20 pb-4">
            <h3 className="text-lg font-bold text-black mb-1">1. Tailored for Power Users</h3>
            <p className="text-black/80 text-base">Designed to break through standard mobile app constraints, offering deeper access and personalized configuration options.</p>
          </div>

          <div className="border-b border-black/20 pb-4">
            <h3 className="text-lg font-bold text-black mb-1">2. Optimized Resource Handling</h3>
            <p className="text-black/80 text-base">Minimizes unnecessary background usage to ensure smooth operation during heavy multitasking or gaming sessions.</p>
          </div>

          <div className="border-b border-black/20 pb-4">
            <h3 className="text-lg font-bold text-black mb-1">3. Flexible Layout Architecture</h3>
            <p className="text-black/80 text-base">An intuitive interface that prioritizes speed and effortless navigation without sacrificing aesthetic appeal.</p>
          </div>

        </div>

        <div className="space-y-4 text-black/80 text-base sm:text-lg leading-relaxed text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
          <p>
            By combining high responsiveness with easy-to-use customization tools, Devastate APK serves as a reliable solution for anyone seeking complete control over their Android environment.
          </p>
        </div>

      </div>
    </div>
  );
}