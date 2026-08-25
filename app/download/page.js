'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DownloadPage() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isReady, setIsReady] = useState(false);
  const [apk, setApk] = useState({
    appName: 'Devastate',
    version: '1.0',
    size: '52.2 MB',
    downloadUrl: 'https://apkdownloader.cc/storage/files/2026/08/devastate.apk.v1.0.apk',
    packageName: 'com.devastate.android',
    androidRequired: '6.0 or newer',
    architecture: 'Universal',
    developer: 'Devastate DEV',
  });

  useEffect(() => {
    fetch('/api/apk')
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setApk(data);
        }
      })
      .catch(() => {});
  }, []);

  // Page par aate hi timer automatically start ho jayega
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsReady(true);
    }
  }, [timeLeft]);

  const handleDownload = async () => {
    // 1. Next.js Backend API Call (Tracking)
    try {
      await fetch('/api/apk/track-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.warn('Tracking server error:', error);
    }

    // 2. Real file download trigger with the dynamic link
    const targetUrl = apk.downloadUrl || 'https://apkdownloader.cc/storage/files/2026/08/devastate.apk.v1.0.apk';
    const link = document.createElement('a');
    link.href = targetUrl;
    link.setAttribute('download', `${apk.appName || 'Devastate'}.apk`);
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main
      className="w-full py-10 sm:py-16 text-left"
      style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Heading aur 2-3 lines */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <h1
            className="text-3xl sm:text-5xl font-bold text-black uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Download {apk.appName || 'Devastate'} APK
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-black/80 mt-4">
            Get the secure and verified Android Package Kit file for Devastate. Please wait a few seconds while we prepare your file. Once the timer finishes, click the download button to save the APK to your device.
          </p>
        </div>

        {/* Download Action & Timer Area - Centered */}
        <div className="flex flex-col items-center w-full mb-16">
          {!isReady ? (
            <div className="w-full max-w-lg space-y-4 p-6 bg-black/5 rounded-2xl border border-black/10 shadow-xs">
              <div className="flex justify-between text-xs sm:text-sm font-bold text-black uppercase">
                <span>PREPARING YOUR FILE...</span>
                <span>{(10 - timeLeft) * 10}%</span>
              </div>
              
              {/* Auto Progress Bar */}
              <div className="w-full bg-black/10 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-black h-full transition-all duration-1000 ease-linear" 
                  style={{ width: `${(10 - timeLeft) * 10}%` }}
                ></div>
              </div>
              
              <div className="flex justify-center text-xs text-black/60 font-mono font-bold tracking-wider">
                PLEASE WAIT {timeLeft} SECONDS
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4 animate-fade-in">
              <button
                onClick={handleDownload}
                className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-sm sm:text-base tracking-wider px-12 py-4 rounded-xl transition uppercase shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200 cursor-pointer"
              >
                Download APK Now
              </button>
              <p className="text-black/60 text-xs sm:text-sm font-medium">
                File Size: ~{apk.size || '52.2 MB'} • Version: {apk.version || '1.0'} • Verified Secure
              </p>
            </div>
          )}
        </div>

        {/* Detailed Page Content - Matches max-w-6xl width */}
        <div className="w-full space-y-12 text-sm sm:text-base leading-relaxed text-black/85 border-t border-black/10 pt-12">
          
          {/* Intro / SEO Paragraphs */}
          <section className="space-y-4">
            <p>
              Check {apk.appName || 'Devastate'} APK before installation, with its size, Android version, package name, permissions, storage needs, and download source.
            </p>
            <p>
              The file is provided for users who want to manually install an anime-style interactive simulation game with 2D visuals, mysterious story atmosphere, character-focused gameplay, dialogue choices, item-based interaction, daily task progression, coin rewards, outfit customization, and Android touch controls while avoiding fake, modified, patched, cracked, premium unlocked, unsafe, or misleading APK files.
            </p>
          </section>

          {/* Installation Steps */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-black uppercase"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              Installation Steps
            </h2>
            <p>
              Installing {apk.appName || 'Devastate'} APK on Android only takes a few simple steps. Make sure the APK is fully downloaded before you start.
            </p>
            <ul className="space-y-2 font-medium text-xs sm:text-sm pl-4">
              <li>1. Open your Downloads folder and find the {apk.appName || 'Devastate'} APK.</li>
              <li>2. Tap the APK file to start the installation.</li>
              <li>3. If asked, allow your browser or file manager to install unknown apps.</li>
              <li>4. Tap Install and wait for the process to finish.</li>
              <li>5. Once installed, tap Open and start playing {apk.appName || 'Devastate'}.</li>
            </ul>
          </section>

          {/* Before You Install */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-black uppercase"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              {apk.appName || 'Devastate'} APK Before You Install: Things to Check
            </h2>
            <p>
              Before you install {apk.appName || 'Devastate'} APK, check a few important details first. It only takes a minute, but it can save you from common installation errors and compatibility issues.
            </p>
            <p>
              You do not need any complicated checks. Look at the APK information, compare it with your phone, review the permissions, and make sure the file comes from a source you trust.
            </p>
          </section>

          {/* APK Details Table */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-black uppercase"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              {apk.appName || 'Devastate'} APK Details
            </h2>
            <div className="overflow-x-auto border border-black/10 rounded-2xl bg-white shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-3.5 uppercase font-bold tracking-wider">Detail</th>
                    <th className="p-3.5 uppercase font-bold tracking-wider">Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10 font-medium">
                  <tr>
                    <td className="p-3.5 text-black/70">App Name</td>
                    <td className="p-3.5 font-bold text-black">{apk.appName || 'Devastate'}</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-black/70">Package Name</td>
                    <td className="p-3.5 text-black">{apk.packageName || 'com.devastate.android'}</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-black/70">APK Size</td>
                    <td className="p-3.5 text-black">{apk.size || 'About 52.2 MB'}</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-black/70">Android Version</td>
                    <td className="p-3.5 text-black">{apk.androidRequired || '6.0 or newer'}</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-black/70">Architecture</td>
                    <td className="p-3.5 text-black">{apk.architecture || 'Universal'}</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-black/70">Developer</td>
                    <td className="p-3.5 text-black">{apk.developer || 'Devastate DEV'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Check Android Requirement */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-black uppercase"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              Check the Android Requirement
            </h2>
            <p>
              {apk.appName || 'Devastate'} currently requires Android {apk.androidRequired || '6.0 or newer'}. Go to Settings &gt; About Phone and check your Android version before you install the APK.
            </p>
            <p>
              Your phone should also have enough free storage. The APK is around {apk.size || '52.2 MB'}, but Android needs additional space for installation, game data, and cache.
            </p>
          </section>

          {/* Check APK Information */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-black uppercase"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              Check the APK Information
            </h2>
            <p>
              Compare the file size, version, package name, and developer details with the information on the download page. The listed package name is {apk.packageName || 'com.devastate.android'}.
            </p>
            <p>
              If the details look very different, check the file again before you install it.
            </p>
          </section>

          {/* Review Permissions */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-black uppercase"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              Review the Permissions
            </h2>
            <p>
              Check the permissions requested by {apk.appName || 'Devastate'} before installation. Make sure the requests seem reasonable for a mobile game.
            </p>
            <p>
              After installation, you can also open Settings &gt; Apps &gt; {apk.appName || 'Devastate'} &gt; Permissions to see what access the app has on your phone.
            </p>
          </section>

          {/* Check Download Source */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-black uppercase"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              Check the Download Source
            </h2>
            <p>
              The source is another important point. Use a page that clearly shows the APK name, version, size, and Android requirement.
            </p>
            <p>
              Avoid download pages that push extra apps, show misleading buttons, or provide files with unclear details.
            </p>
          </section>

          {/* Quick Checklist */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-black uppercase"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              Quick Checklist
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs sm:text-sm font-medium">
              <div>✓ Check Android 6.0+ support.</div>
              <div>✓ Confirm the APK size.</div>
              <div>✓ Check the package name.</div>
              <div>✓ Review permissions.</div>
              <div>✓ Check the developer name.</div>
              <div>✓ Keep enough storage free.</div>
              <div>✓ Confirm the APK version.</div>
              <div>✓ Use a reliable source.</div>
              <div>✓ Avoid suspicious modified files.</div>
            </div>
            <p className="pt-2">
              A few quick checks can make the {apk.appName || 'Devastate'} APK installation much easier. Confirm the Android requirement, APK details, package name, permissions, storage, and download source before you start.
            </p>
            <p>
              If the information matches and nothing looks unusual, you can move ahead with the installation.
            </p>
          </section>

          {/* Permissions Table Section */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-black uppercase"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              {apk.appName || 'Devastate'} APK Permissions
            </h2>
            <p>
              {apk.appName || 'Devastate'} uses only a few permissions, mainly for internet access and its own internal functions. It does not require a long list of permissions to run the game.
            </p>
            <div className="overflow-x-auto border border-black/10 rounded-2xl bg-white shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-3.5 uppercase font-bold tracking-wider">Permission</th>
                    <th className="p-3.5 uppercase font-bold tracking-wider">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10 font-medium">
                  <tr>
                    <td className="p-3.5 text-black/70">Internet</td>
                    <td className="p-3.5 text-black">Allows the game to access online content or services when required.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-black/70">Internal App Permission</td>
                    <td className="p-3.5 text-black">Used internally by the app for communication between its own components.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>

        {/* Quick Links */}
        <div className="w-full flex justify-center gap-4 pt-10 mt-14 border-t border-black/10">
          <Link 
            href="/" 
            className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
          >
            Home Page
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </main>
  );
}