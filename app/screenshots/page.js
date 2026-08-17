export default function ScreenshotsPage() {
  return (
    <div className="w-full text-left">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3 text-left" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Screenshots
      </h2>
      
      <div className="space-y-4 text-black/80 text-base sm:text-lg leading-relaxed mb-8 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <p>
          Take a look at the clean interface, streamlined menus, and optimized layouts designed for effortless navigation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        
        {/* Gaming Screenshot 1 */}
        <div className="w-full overflow-hidden border border-black/10 shadow-sm transition hover:scale-[1.02] duration-300">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" 
            alt="Gaming Performance" 
            className="w-full h-auto object-cover aspect-[9/16]"
          />
        </div>

        {/* Gaming Screenshot 2 */}
        <div className="w-full overflow-hidden border border-black/10 shadow-sm transition hover:scale-[1.02] duration-300">
          <img 
            src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80" 
            alt="Game Controls" 
            className="w-full h-auto object-cover aspect-[9/16]"
          />
        </div>

        {/* Gaming Screenshot 3 - Updated */}
        <div className="w-full overflow-hidden border border-black/10 shadow-sm transition hover:scale-[1.02] duration-300">
          <img 
            src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Game Settings" 
            className="w-full h-auto object-cover aspect-[9/16]"
          />
        </div>

      </div>
    </div>
  );
}