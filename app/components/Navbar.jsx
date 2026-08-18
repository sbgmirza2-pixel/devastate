import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#EFECE6] border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/Devastate-fav-icon.webp" 
            alt="Devastate Logo" 
            className="w-12 h-12 rounded-full border border-black object-cover shadow-sm"
          />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-bold tracking-widest text-black uppercase">
          <Link href="/" className="hover:opacity-70 transition">Home</Link>
          <Link href="/blog" className="hover:opacity-70 transition">Blog</Link>
          <Link href="/faqs" className="hover:opacity-70 transition">FAQs</Link>
          <Link href="/download" className="hover:opacity-70 transition">Download</Link>
        </nav>

        {/* Attractive Rounded Get App Button */}
        <div className="flex items-center gap-3">
          <Link 
            href="/download" 
            className="border-2 border-black bg-black hover:bg-black/90 text-white font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition shadow-md uppercase"
          >
            Get App
          </Link>
        </div>

      </div>
    </header>
  );
}