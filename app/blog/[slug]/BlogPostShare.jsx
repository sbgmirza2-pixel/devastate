'use client';

import { useState } from 'react';

export default function BlogPostShare({ title }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = (platform) => {
    if (typeof window === 'undefined') return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title || 'Devastate APK Blog');

    let shareUrl = '';
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-black/50 text-xs font-bold uppercase tracking-wider hidden sm:inline">
        Share:
      </span>
      <button
        onClick={() => handleShare('twitter')}
        className="px-3 py-1.5 rounded-lg bg-black/5 hover:bg-black hover:text-white text-black text-xs font-bold transition border border-black/10 cursor-pointer"
        title="Share on X"
      >
        𝕏
      </button>
      <button
        onClick={() => handleShare('facebook')}
        className="px-3 py-1.5 rounded-lg bg-black/5 hover:bg-black hover:text-white text-black text-xs font-bold transition border border-black/10 cursor-pointer"
        title="Share on Facebook"
      >
        FB
      </button>
      <button
        onClick={() => handleShare('whatsapp')}
        className="px-3 py-1.5 rounded-lg bg-black/5 hover:bg-black hover:text-white text-black text-xs font-bold transition border border-black/10 cursor-pointer"
        title="Share on WhatsApp"
      >
        WA
      </button>
      <button
        onClick={handleCopy}
        className="px-3 py-1.5 rounded-lg bg-black/5 hover:bg-black hover:text-white text-black text-xs font-bold transition border border-black/10 cursor-pointer"
      >
        {copied ? '✓ Copied!' : '🔗 Copy Link'}
      </button>
    </div>
  );
}
