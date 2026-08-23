"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#EFECE6] border-b border-black/10">
      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-20 flex items-center justify-between gap-3">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/Devastate-fav-icon.webp"
            alt="Devastate Logo"
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-black object-cover shadow-sm"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-xs sm:text-sm font-bold tracking-widest text-black uppercase">
          <Link href="/" className="hover:opacity-70 transition">
            Home
          </Link>

          <Link href="/blog" className="hover:opacity-70 transition">
            Blog
          </Link>

          <Link href="/faqs" className="hover:opacity-70 transition">
            FAQs
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Desktop Download */}
          <Link
            href="/download"
            className="hidden sm:inline-flex border-2 border-black bg-black hover:bg-black/90 text-white font-extrabold text-[10px] sm:text-xs tracking-wider px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition shadow-md uppercase whitespace-nowrap"
          >
            Download Devastate APK
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-black/20 bg-white/50 hover:bg-white transition"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-black/10 bg-[#EFECE6]">
          <nav className="px-4 py-3 flex flex-col gap-1.5">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase text-black hover:bg-black/5 transition"
            >
              Home
            </Link>

            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase text-black hover:bg-black/5 transition"
            >
              Blog
            </Link>

            <Link
              href="/faqs"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase text-black hover:bg-black/5 transition"
            >
              FAQs
            </Link>

            <Link
              href="/download"
              onClick={() => setIsOpen(false)}
              className="mt-1 text-center border-2 border-black bg-black hover:bg-black/90 text-white font-extrabold text-xs tracking-wider px-5 py-3 rounded-xl transition shadow-md uppercase"
            >
              Download Devastate APK
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}