import Link from 'next/link';

export const metadata = {
  title: "Download & Installation Guide - Devastate APK",
  description: "Simple step-by-step instructions to download and install Devastate APK on Android phones and tablets.",
  alternates: {
    canonical: '/guide',
  },
};

export default function GuidePage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-0 py-8 text-left">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide uppercase border-b-2 border-black pb-3 text-left" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        How to Download & Install Devastate APK
      </h2>

      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed font-normal mb-12 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <p className="text-left">
          Installing Devastate APK on your Android device is simple. Follow the step-by-step instructions below to ensure a smooth and successful setup.
        </p>

        <ol className="list-decimal list-inside space-y-4 pt-4 border-t border-black/10 text-left">
          <li className="font-medium text-left">
            <strong className="text-black font-bold">Download the APK File:</strong> Head over to the <Link href="/download" className="underline font-bold text-black hover:opacity-70 transition">Download Page</Link> and tap the download button to get the latest verified file.
          </li>
          <li className="font-medium text-left">
            <strong className="text-black font-bold">Enable Unknown Sources:</strong> Go to your Android device <strong className="text-black font-bold">Settings &gt; Security</strong> (or Privacy) and enable installation from unknown sources if prompted.
          </li>
          <li className="font-medium text-left">
            <strong className="text-black font-bold">Locate the File:</strong> Open your file manager or notification panel and tap on the downloaded <strong className="text-black font-bold">Devastate APK</strong> file.
          </li>
          <li className="font-medium text-left">
            <strong className="text-black font-bold">Complete Installation:</strong> Tap <strong className="text-black font-bold">Install</strong> and wait a few seconds for the setup to finish.
          </li>
          <li className="font-medium text-left">
            <strong className="text-black font-bold">Launch & Enjoy:</strong> Open the app from your app drawer and enjoy all the enhanced features!
          </li>
        </ol>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 text-left">
        <Link 
          href="/download" 
          className="w-full sm:w-auto text-center border-2 border-black bg-black hover:bg-transparent hover:text-black text-white font-extrabold text-sm tracking-wider px-8 py-4 transition uppercase shadow-sm"
        >
          Go To Download Page
        </Link>
        <Link 
          href="/apk/devastate-apk" 
          className="w-full sm:w-auto text-center border-2 border-black bg-transparent hover:bg-black hover:text-white text-black font-extrabold text-sm tracking-wider px-8 py-4 transition uppercase shadow-sm"
        >
          View App Details
        </Link>
      </div>
    </div>
  );
}