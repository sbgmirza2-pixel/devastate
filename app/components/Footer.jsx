import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#EFECE6] py-10 text-center text-xs font-semibold tracking-wider text-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2026 Devastate APK. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}