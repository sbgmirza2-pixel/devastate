import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found (404) - Devastate APK',
  description: 'The page you are looking for does not exist or has been moved.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-black/10 shadow-sm">
        <span className="text-5xl mb-4 block">🔍</span>
        <span className="text-xs font-bold uppercase tracking-widest text-black/50 bg-black/5 px-3 py-1 rounded-full">
          404 Error
        </span>
        <h1
          className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-3 tracking-tight"
          style={{ fontFamily: 'var(--font-heading), sans-serif' }}
        >
          Page Not Found
        </h1>
        <p className="text-black/70 text-sm leading-relaxed mb-8">
          The page or APK resource you requested could not be found. It may have been moved or removed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto bg-black text-white hover:bg-black/90 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition shadow-sm"
          >
            Go to Homepage
          </Link>
          <Link
            href="/blog"
            className="w-full sm:w-auto border border-black/20 text-black hover:bg-black/5 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition"
          >
            Browse Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
