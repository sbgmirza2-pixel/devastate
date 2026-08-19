export default function FaqSection() {
  const faqs = [
    { q: "What is Devastate APK?", a: "Devastate APK is the Android installation package for the Devastate simulation game featuring anime 2D visuals and character interactions." },
    { q: "Is Devastate Free to Play?", a: "Yes, Devastate is free to play on Android with core gameplay accessible without upfront payments." },
    { q: "What is the package name?", a: "The listed package name is com.devastate.android." },
    { q: "Which Android version is required?", a: "The minimum requirement is Android 6.0 or newer." },
    { q: "How large is the APK?", a: "The file size is approximately 52.21 MB." }
  ];

  return (
    <div className="space-y-6 mb-16">
      <h2 className="text-3xl font-bold text-black uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="bg-[#F4F1EA] p-6 rounded-xl">
            <h3 className="font-bold text-black text-lg mb-2">{item.q}</h3>
            <p className="text-black/80 text-sm sm:text-base">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}