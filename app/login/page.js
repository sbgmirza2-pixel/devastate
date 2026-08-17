import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="w-full max-w-md mx-auto py-16 px-4 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Page Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3 tracking-wide uppercase border-b-2 border-black pb-3 text-left" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Account Login
      </h2>
      
      <p className="text-black/80 text-sm sm:text-base mb-8">
        Access your account to manage downloads, preferences, and community settings.
      </p>

      {/* Login Form */}
      <form className="space-y-6">
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

        <div className="flex items-center justify-between text-xs font-medium">
          <label className="flex items-center gap-2 cursor-pointer text-black">
            <input type="checkbox" className="w-4 h-4 border-2 border-black rounded accent-black" />
            Remember me
          </label>
          <Link href="#" className="underline font-bold text-black hover:opacity-70 transition">
            Forgot password?
          </Link>
        </div>

        <button 
          type="submit" 
          className="w-full text-center border-2 border-black bg-black hover:bg-transparent hover:text-black text-white font-extrabold text-sm tracking-wider py-4 transition uppercase shadow-sm"
        >
          Sign In
        </button>
      </form>

      {/* Footer link for signup */}
      <p className="text-center text-xs sm:text-sm text-black/70 mt-8">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="underline font-bold text-black hover:opacity-70 transition">
          Sign up
        </Link>
      </p>

    </div>
  );
}