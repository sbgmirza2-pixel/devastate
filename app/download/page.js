'use client';
import { useState } from 'react';

export default function DownloadPage() {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const startDownload = () => {
    setIsDownloading(true);
    setDownloadComplete(false);
    setProgress(0);
    setTimeLeft(10);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          setDownloadComplete(true);
          return 100;
        }
        return prev + 10;
      });

      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 flex flex-col items-center text-center" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Page Title */}
      <h2 className="text-3xl sm:text-5xl font-bold text-black mb-4 tracking-wide uppercase border-b-2 border-black pb-3 w-full" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Download Devastate APK
      </h2>
      
      <p className="text-black/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
        Get the latest stable build of Devastate APK for your Android device. Fast, optimized, and secure.
      </p>

      {/* Main Download Card */}
      <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-xl text-left">
        
        {/* File Info Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 mb-6 border-b border-black/10 gap-4">
          <div>
            <h3 className="text-lg font-extrabold text-black uppercase tracking-wide">Devastate Mobile Package</h3>
            <p className="text-black/60 text-sm mt-0.5">Version 2.4.0 &bull; Universal Architecture &bull; ~45 MB</p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-black uppercase px-3 py-1 rounded-full border border-green-300">
            Verified Secure
          </span>
        </div>

        {/* Action / Progress Area */}
        {!isDownloading && !downloadComplete ? (
          <div className="text-center">
            <button
              onClick={startDownload}
              className="w-full bg-black text-white font-extrabold text-base px-10 py-4 rounded-xl hover:bg-black/90 transition uppercase tracking-wider shadow-md"
            >
              Download APK Now
            </button>
            <p className="text-black/50 text-xs mt-3">
              By downloading, you agree to allow installation from unknown sources in your Android settings.
            </p>
          </div>
        ) : isDownloading ? (
          <div className="w-full space-y-4">
            <div className="flex justify-between text-sm font-bold text-black">
              <span>Downloading package...</span>
              <span>{progress}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div 
                className="bg-black h-full transition-all duration-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <p className="text-black/60 text-xs text-center">
              Estimated time remaining: <span className="font-bold">{timeLeft} seconds</span>
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-center">
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 font-bold text-sm">
              ✔ Download Complete! Your file is ready in your device downloads.
            </div>
            <button
              onClick={startDownload}
              className="w-full bg-white border-2 border-black text-black font-extrabold text-xs px-6 py-3 rounded-xl hover:bg-black hover:text-white transition uppercase tracking-wider"
            >
              Download Again
            </button>
          </div>
        )}

      </div>

    </div>
  );
}