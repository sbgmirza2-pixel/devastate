'use client';
import { useState, useEffect } from 'react';

export default function SystemReadoutPage() {
  const [systemInfo, setSystemInfo] = useState({
    userAgent: '',
    platform: '',
    language: '',
    online: true,
    screenResolution: '',
    memory: 'N/A',
    touchSupport: false,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSystemInfo({
        userAgent: navigator.userAgent,
        platform: navigator.platform || 'Unknown',
        language: navigator.language || 'en',
        online: navigator.onLine,
        screenResolution: `${window.innerWidth} x ${window.innerHeight}`,
        memory: navigator.deviceMemory ? `${navigator.deviceMemory} GB+` : '4 GB+ (Estimated)',
        touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      });
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      
      {/* Page Title */}
      <h1 className="text-4xl sm:text-6xl font-normal text-black mb-4 tracking-wide text-center uppercase" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        System Readout
      </h1>
      
      <p className="text-center text-black/70 mb-10 max-w-xl mx-auto text-sm sm:text-base" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        Live device environment & package compatibility details for Devastate APK.
      </p>

      {/* APK & Game Specific Package Details */}
      <div className="bg-white border-2 border-black/80 p-6 rounded-2xl shadow-md mb-8" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <h2 className="text-xs font-black uppercase tracking-widest text-black/40 mb-4 pb-2 border-b border-black/10">
          Target Package Specifications
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="block text-black/50 font-bold uppercase text-xs">Game / App Name</span>
            <span className="text-black font-extrabold text-base">Devastate Mobile Experience</span>
          </div>
          <div>
            <span className="block text-black/50 font-bold uppercase text-xs">Package Name</span>
            <span className="text-black font-mono font-bold text-sm bg-gray-100 px-2 py-0.5 rounded border border-black/10 inline-block mt-0.5">com.devastate.apk.mobile</span>
          </div>
          <div>
            <span className="block text-black/50 font-bold uppercase text-xs">Version Code / Release</span>
            <span className="text-black font-extrabold text-base">v2.4.0 (Stable Build)</span>
          </div>
          <div>
            <span className="block text-black/50 font-bold uppercase text-xs">Target Architecture</span>
            <span className="text-black font-extrabold text-base">Universal (ARMv7 / ARM64 / x86)</span>
          </div>
        </div>
      </div>

      {/* Device Diagnostic Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        
        <div className="bg-white border-2 border-black/80 p-6 rounded-xl shadow-sm">
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-black/40 mb-1">Operating System</h3>
          <p className="text-black font-bold text-base">{systemInfo.platform}</p>
        </div>

        <div className="bg-white border-2 border-black/80 p-6 rounded-xl shadow-sm">
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-black/40 mb-1">Network Status</h3>
          <p className={`font-bold text-base ${systemInfo.online ? 'text-green-600' : 'text-red-600'}`}>
            {systemInfo.online ? '● Online (Connected)' : '○ Offline'}
          </p>
        </div>

        <div className="bg-white border-2 border-black/80 p-6 rounded-xl shadow-sm">
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-black/40 mb-1">Screen Resolution</h3>
          <p className="text-black font-bold text-base">{systemInfo.screenResolution}</p>
        </div>

        <div className="bg-white border-2 border-black/80 p-6 rounded-xl shadow-sm">
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-black/40 mb-1">Estimated RAM / Memory</h3>
          <p className="text-black font-bold text-base">{systemInfo.memory}</p>
        </div>

        <div className="bg-white border-2 border-black/80 p-6 rounded-xl shadow-sm sm:col-span-2">
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-black/40 mb-1">Browser / Environment User Agent</h3>
          <p className="text-black text-xs font-mono break-all bg-gray-50 p-3 rounded-lg border border-black/10 mt-2">
            {systemInfo.userAgent}
          </p>
        </div>

      </div>

    </div>
  );
}