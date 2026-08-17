export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight" style={{ fontFamily: 'var(--font-bodoni), serif' }}>
        Privacy Policy
      </h1>

      <div className="space-y-6 text-black/80 text-sm md:text-base leading-relaxed mb-12 font-normal" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <p>
          At Devastate APK, accessible from our website, your privacy is extremely important to us. This Privacy Policy document outlines the types of information that is collected and recorded by us and how we use it.
        </p>
        <h2 className="text-xl font-bold text-black pt-4" style={{ fontFamily: 'var(--font-bodoni), serif' }}>Log Files</h2>
        <p>
          We follow a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, and referring/exit pages.
        </p>
      </div>
    </div>
  );
}
