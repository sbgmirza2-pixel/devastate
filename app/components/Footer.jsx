import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#9CA3AF] border-t border-white/10 pt-16 pb-8" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
        
        {/* Column 1: Brand Info with Circular Logo */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {/* Logo Wrapper - Changed 'rounded' to 'rounded-full border' */}
            <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-white/20 shadow-inner bg-[#1F1F1F] flex items-center justify-center p-0.5">
              <Image 
                src="/Devastate-fav-icon.webp" 
                alt="Devastate Logo" 
                fill 
                className="object-contain" // Use 'contain' if logo has empty space, 'cover' if it fills image
              />
            </div>
            <span className="text-white font-extrabold text-lg tracking-wider uppercase" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
              Devastate
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            Devastate APK download guides for an Android anime-style interactive simulation game with 2D visuals, mystery atmosphere, and character-focused gameplay.
          </p>
        </div>

        {/* Column 2: Legal Links */}
        <div>
          <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-4">
            Legal
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Follow Us On */}
        <div>
          <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-4">
            Follow Us On
          </h4>
          <div className="flex flex-wrap gap-2">
            {['Facebook', 'X', 'Instagram', 'Reddit', 'Pinterest', 'YouTube', 'Telegram', 'Tiktok'].map((social) => (
              <span 
                key={social} 
                className="bg-[#1F1F1F] border border-white/10 text-gray-300 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider hover:bg-white hover:text-black transition cursor-pointer"
              >
                {social}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Sub-footer */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <p>© 2026 Devastate. All rights reserved.</p>
        <div className="flex items-center gap-2 mt-3 sm:mt-0">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="tracking-widest uppercase font-bold text-gray-400">Monitor Online</span>
        </div>
      </div>
    </footer>
  );
}