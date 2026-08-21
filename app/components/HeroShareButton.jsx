'use client';

export default function HeroShareButton({ appName }) {
  const handleShare = () => {
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        navigator.share({ title: `${appName} APK`, url: window.location.href }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="text-black font-black uppercase tracking-wider hover:underline cursor-pointer text-xs bg-black/5 px-3 py-1.5 rounded-md border border-black/10 transition"
    >
      Share App
    </button>
  );
}
