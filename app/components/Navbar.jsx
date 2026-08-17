import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#EFECE6] border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo size */}
          <img 
            src="/Devastate-fav-icon.png" 
            alt="Devastate Logo" 
            className="w-12 h-12 rounded-full border border-black object-cover shadow-sm"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-bold tracking-widest text-black">
          <Link href="/" className="hover:opacity-70 transition">HOME</Link>
          <Link href="/guide" className="hover:opacity-70 transition">GUIDE</Link>
          <Link href="/about" className="hover:opacity-70 transition">About Us</Link>

       
          <Link href="/terms" className="hover:opacity-70 transition">Terms&Condition</Link>
           <Link href="/privacy" className="hover:opacity-70 transition">Privacy policies</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link 
            href="/login" 
            className="hidden sm:inline-block text-black font-extrabold text-xs tracking-wider px-4 py-2.5 transition hover:opacity-70 uppercase"
          >
            Sign In
          </Link>
          <Link 
            href="/signup" 
            className="border-2 border-black bg-black hover:bg-transparent hover:text-black text-white font-extrabold text-xs tracking-wider px-5 py-2.5 transition uppercase shadow-sm"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}