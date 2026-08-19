export default function UpdateAndSafety() {
  return (
    <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
      <h2 className="text-3xl font-bold text-black uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Updates, Internet & Safety
      </h2>
      <p>
        <strong>How to Update:</strong> Download the newer APK and install it over your current version. Make sure the package name matches and back up your game data before updating.
      </p>
      <p>
        <strong>Internet Requirements:</strong> Some gameplay works offline, while updates, advertisements, or external services require internet access. Test your version to check offline capabilities.
      </p>
      <p>
        <strong>Safety Tip:</strong> Always download from a trustworthy source, verify the package name (<code className="bg-black/10 px-2 py-0.5 rounded text-sm font-mono">com.devastate.android</code>), and avoid modified or cracked mod APKs.
      </p>
    </div>
  );
}