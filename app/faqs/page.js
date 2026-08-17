export default function FAQsPage() {
  return (
    <div className="w-full text-left">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3 text-left" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <div className="border-b border-black/20 pb-4">
          <h3 className="text-lg font-bold text-black mb-1">Is Devastate APK safe to use?</h3>
          <p className="text-black/80 text-base">Yes, the application is thoroughly tested and optimized to ensure safe and stable execution on compatible Android devices.</p>
        </div>

        <div className="border-b border-black/20 pb-4">
          <h3 className="text-lg font-bold text-black mb-1">Do I need root access?</h3>
          <p className="text-black/80 text-base">No root access is required to use standard features and layout adjustments.</p>
        </div>

        <div className="border-b border-black/20 pb-4">
          <h3 className="text-lg font-bold text-black mb-1">How do I update the application?</h3>
          <p className="text-black/80 text-base">You can check the "What's New" section or visit the download page periodically to grab the latest release version.</p>
        </div>
      </div>
    </div>
  );
}