import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight" style={{ fontFamily: 'var(--font-bodoni), serif' }}>
        About Devastate APK
      </h1>

      <div className="space-y-6 text-black/80 text-sm md:text-base leading-relaxed mb-12 font-normal" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <p>
          Welcome to Devastate APK, your trusted platform for safe, fast, and verified Android application downloads. We are dedicated to providing mobile users with high-performance gaming-style apps and customized utilities that enhance everyday device usage.
        </p>
        <p>
          Our mission is to make finding and updating your favorite APK files simple, transparent, and secure. Every file hosted on our platform is carefully reviewed to ensure a smooth and reliable installation experience.
        </p>
        <p>
          If you want to learn more about our app features, check out the <Link href="/apk/devastate-apk" className="underline font-bold text-black hover:opacity-70 transition">App Detail Page</Link> or visit our <Link href="/download" className="underline font-bold text-black hover:opacity-70 transition">Download Page</Link> to get started.
        </p>
      </div>
    </div>
  );
}