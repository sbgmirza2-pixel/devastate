import Link from 'next/link';

export default function FinalWords() {
  return (
    <div className="bg-black text-white p-8 rounded-2xl text-center space-y-4">
      <h2 className="text-3xl font-bold uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Final Words
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        Devastate APK offers a unique Android simulation experience centered around anime-inspired visuals, dialogue choices, and character progression. Check your device requirements, download from a trusted source, and dive in!
      </p>
      <div className="pt-4">
        <Link 
          href="/download" 
          className="inline-block bg-white text-black hover:bg-gray-200 font-extrabold text-sm tracking-widest px-8 py-4 rounded-xl transition uppercase shadow-lg"
        >
          Download Devastate APK
        </Link>
      </div>
    </div>
  );
}