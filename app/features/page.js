export default function FeaturesPage() {
  return (
    <div className="w-full px-2 sm:px-4 mx-0 text-left">
      {/* Main Grid Layout: Left side Features List, Right side Table of Contents */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
        
        {/* Left Side: Main Features Content (Takes 8 columns) */}
        <div className="lg:col-span-8 w-full text-left">
          {/* Heading with Anton font */}
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3 text-left" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Main Features
          </h2>

          {/* Intro Paragraphs */}
          <div className="space-y-4 text-black/80 text-base sm:text-lg leading-relaxed mb-8 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
            <p>
              Devastate APK comes packed with advanced customization and performance-enhancing options designed specifically to elevate your mobile experience.
            </p>
            <p>
              Explore the core features that give players and power-users full control over their gaming environment and device optimization.
            </p>
          </div>

          {/* Features List Grid / Items */}
          <div className="space-y-6 mb-8 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
            
            <div className="border-b border-black/20 pb-4">
              <h3 className="text-lg font-bold text-black mb-1">1. Advanced Performance Tuning</h3>
              <p className="text-black/80 text-base">Optimize frame rates and resource allocation to ensure smoother execution during intensive gaming sessions.</p>
            </div>

            <div className="border-b border-black/20 pb-4">
              <h3 className="text-lg font-bold text-black mb-1">2. Custom Graphic Controls</h3>
              <p className="text-black/80 text-base">Fine-tune visual rendering options beyond default system settings for a sharper and more responsive display.</p>
            </div>

            <div className="border-b border-black/20 pb-4">
              <h3 className="text-lg font-bold text-black mb-1">3. Enhanced User Interface</h3>
              <p className="text-black/80 text-base">A clean, streamlined dashboard layout that allows quick navigation and effortless control management.</p>
            </div>

            <div className="border-b border-black/20 pb-4">
              <h3 className="text-lg font-bold text-black mb-1">4. Lightweight & Fast Execution</h3>
              <p className="text-black/80 text-base">Designed to consume minimal system battery and storage while maintaining high operational speed.</p>
            </div>

            <div className="border-b border-black/20 pb-4">
              <h3 className="text-lg font-bold text-black mb-1">5. Secure & Stable Tweaks</h3>
              <p className="text-black/80 text-base">Tested configuration protocols to prevent crashes and ensure reliable daily performance on supported Android devices.</p>
            </div>

          </div>

          <div className="space-y-4 text-black/80 text-base sm:text-lg leading-relaxed text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
            <p>
              These integrated tools provide a comprehensive suite for users who want granular control over how their applications and games behave.
            </p>
          </div>
        </div>

        {/* Right Side: Table of Contents (Takes 4 columns) */}
        <div className="lg:col-span-4 lg:sticky lg:top-8 bg-transparent py-4 px-2 w-full text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 tracking-wide uppercase border-b-2 border-black pb-3" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Table of Contents
          </h3>
          <ul className="space-y-3 text-sm font-medium text-black/80 underline text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
            <li>
              <a href="#" className="hover:text-black transition">What Is Devastate APK?</a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">Why People Download the App</a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">Main Features</a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">How to Download and Install the App</a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">Device Compatibility</a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">Why This App Is Useful</a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">Pros and Cons</a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">Frequently Asked Questions</a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">Conclusion</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}