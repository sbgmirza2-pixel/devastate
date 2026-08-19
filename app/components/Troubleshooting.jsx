export default function Troubleshooting() {
  const issues = [
    { title: "APK Installation Fails", desc: "Caused by low storage, incompatible Android versions, or damaged downloads. Free space and re-download." },
    { title: "The Game Doesn't Open", desc: "Restart your phone, clear cache, or reinstall a clean version if requirements are met." },
    { title: "Black Screen", desc: "Restart the application, clear cache, or reinstall the APK package." },
    { title: "Touch Input / Buttons Unresponsive", desc: "Restart the app, check emulator settings if applicable, or clear cache." }
  ];

  return (
    <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
      <h2 className="text-3xl font-bold text-black uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Problems You Might Run Into & Fixes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        {issues.map((item, index) => (
          <div key={index} className="bg-black/5 p-6 rounded-2xl">
            <h3 className="font-bold text-black text-base mb-1">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}