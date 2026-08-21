'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.replace('/admin');
      } else {
        const data = await res.json();
        setError(data.error || 'Invalid password');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-2xl">
            <span className="text-black font-black text-2xl">D</span>
          </div>
          <h1 className="text-white font-bold text-xl tracking-wide">Devastate Admin</h1>
          <p className="text-white/30 text-xs mt-1 uppercase tracking-widest">Secure Access</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm
                         focus:outline-none focus:border-white/30 focus:bg-white/8 transition placeholder-white/20"
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-bold py-3 px-4 rounded-xl text-sm uppercase tracking-widest
                       hover:bg-white/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Verifying…' : 'Login'}
          </button>
        </form>

        <p className="text-center text-white/20 text-xs mt-8">
          Set <code className="font-mono">ADMIN_PASSWORD</code> in <code className="font-mono">.env.local</code>
        </p>
      </div>
    </div>
  );
}
