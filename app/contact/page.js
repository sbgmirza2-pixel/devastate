export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight" style={{ fontFamily: 'var(--font-bodoni), serif' }}>
        Contact Us
      </h1>

      <div className="space-y-6 text-black/80 text-sm md:text-base leading-relaxed mb-12 font-normal" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <p>
          Have questions, feedback, or need assistance with downloading or installing Devastate APK? We are here to help! Reach out to us using the details below.
        </p>
        <div className="bg-black/5 border border-black/10 p-6 space-y-2">
          <p className="font-bold text-black">Support Email:</p>
          <p className="text-black/80">support@devastateapk.com</p>
        </div>
      </div>
    </div>
  );
}