
import Link from 'next/link';

export default function GameSpecs() {
  const specs = [
    { label: "Game Name", value: "Devastate" },
    { label: "Version", value: "1.0" },
    { label: "Developer", value: "Devastate DEV" },
    { label: "Package Name", value: "com.devastate.android" },
    { label: "Category", value: "Simulation" },
    { label: "File Size", value: "52.21 MB" },
    { label: "Android Requirement", value: "Android 6.0+" },
    { label: "File Type", value: "APK" },
    { label: "Platform", value: "Android" },
    { label: "Downloads", value: "286,552+" },
    { label: "Reviews", value: "18,995+" },
    { label: "Rating", value: "4.8/5" },
    { label: "Age Rating", value: "12+" },
  ];

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl mb-12 border border-black/10 shadow-sm">
      <h2 className="text-2xl font-bold text-black mb-6 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Game Specifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
        {specs.map((item, index) => (
          <div key={index} className="flex justify-between border-b border-black/10 py-2">
            <span className="font-bold text-black/60">{item.label}</span>
            <span className="font-semibold text-black">{item.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link 
          href="/download" 
          className="inline-block bg-black text-white hover:bg-black/90 font-extrabold text-sm tracking-widest px-8 py-4 rounded-xl transition uppercase shadow-md"
        >
          Download Devastate APK Now
        </Link>
      </div>
    </div>
  );
}