import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="w-full max-w-md mx-auto py-16 px-4 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Page Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3 tracking-wide uppercase border-b-2 border-black pb-3 text-left" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Create Account
      </h2>
      
      <p className="text-black/80 text-sm sm:text-base mb-8">
        Sign up to unlock all features, manage your downloads, and join the community.
      </p>

      {/* Signup Form */}
      <form className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
            Full Name
          </label>
          <input 
            type="text" 
            placeholder="Saleha" 
            required
            className="w-full border-2 border-black bg-white px-4 py-3 text-black placeholder:text-black/40 focus:outline-none focus:ring-1 focus:ring-black shadow-sm text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
            Email Address
          </label>
          <input 
            type="email" 
            placeholder="name@example.com" 
            required
            className="w-full border-2 border-black bg-white px-4 py-3 text-black placeholder:text-black/40 focus:outline-none focus:ring-1 focus:ring-black shadow-sm text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
            Password
          </label>
          <input 
            type="password" 
            placeholder="••••••••" 
            required
            className="w-full border-2 border-black bg-white px-4 py-3 text-black placeholder:text-black/40 focus:outline-none focus:ring-1 focus:ring-black shadow-sm text-sm"
          />
        </div>

        <div className="text-xs font-medium text-black">
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" required className="mt-0.5 w-4 h-4 border-2 border-black rounded accent-black" />
            <span>I agree to the <Link href="#" className="underline font-bold">Terms of Service</Link> and <Link href="#" className="underline font-bold">Privacy Policy</Link></span>
          </label>
        </div>

        <button 
          type="submit" 
          className="w-full text-center border-2 border-black bg-black hover:bg-transparent hover:text-black text-white font-extrabold text-sm tracking-wider py-4 transition uppercase shadow-sm"
        >
          Create Account
        </button>
      </form>

      {/* Footer link for login */}
      <p className="text-center text-xs sm:text-sm text-black/70 mt-8">
        Already have an account?{' '}
        <Link href="/login" className="underline font-bold text-black hover:opacity-70 transition">
          Sign in
        </Link>
      </p>

    </div>
  );
}