'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-black/10 shadow-sm">
        <span className="text-5xl mb-4 block">⚠️</span>
        <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
          System Alert
        </span>
        <h1
          className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4 mb-3 tracking-tight"
          style={{ fontFamily: 'var(--font-heading), sans-serif' }}
        >
          Something Went Wrong
        </h1>
        <p className="text-black/70 text-sm leading-relaxed mb-8">
          An unexpected error occurred while loading this section. Please try refreshing or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto bg-black text-white hover:bg-black/90 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition shadow-sm cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto border border-black/20 text-black hover:bg-black/5 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
