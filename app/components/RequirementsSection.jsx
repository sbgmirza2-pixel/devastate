export default function RequirementsSection() {
  return (
    <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
      <h2 className="text-3xl font-bold text-black uppercase tracking-wide">
        Android Requirements & Device Compatibility
      </h2>
      <p>
        Before installing, make sure your device meets the listed minimum requirement (Android 6.0 or newer). The APK is around 52 MB, but keep additional storage available for temporary files and game data. Performance varies depending on your phone's RAM, processor, and storage.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div className="bg-white/70 border border-black/5 p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-bold text-black mb-2">Story-Focused Gameplay</h3>
          <p className="text-sm text-black/80">Take your time exploring scenes, following the story, and completing tasks instead of rushing through levels.</p>
        </div>
        <div className="bg-white/70 border border-black/5 p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-bold text-black mb-2">Interactive Character Experience</h3>
          <p className="text-sm text-black/80">Interact with characters, follow conversations, and experience personal scenarios that make gameplay engaging.</p>
        </div>
      </div>
    </div>
  );
}