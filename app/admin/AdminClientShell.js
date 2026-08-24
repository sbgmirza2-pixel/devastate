'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: '📊' },
  { href: '/admin/apk', label: 'APK Manager', icon: '📦' },
  { href: '/admin/categories', label: 'Categories', icon: '🗂️' },
  { href: '/admin/media', label: 'Media Library', icon: '🖼️' },
  { href: '/admin/downloads', label: 'Downloads', icon: '⬇️' },
  { href: '/admin/users', label: 'Admin Users', icon: '👤' },
  { href: '/admin/activity', label: 'Activity Log', icon: '🕘' },
  { href: '/admin/blog', label: 'Blog Posts', icon: '📝' },
  { href: '/admin/settings', label: 'Site Settings', icon: '⚙️' },
  { href: '/admin/pages', label: 'Pages', icon: '📄' },
];

export default function AdminClientShell({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (pathname === '/admin/login') {
      setChecking(false);
      return;
    }
    fetch('/api/admin/verify')
      .then((r) => r.json())
      .then((data) => {
        if (!data.authenticated) router.replace('/admin/login');
        else setChecking(false);
      })
      .catch(() => router.replace('/admin/login'));
  }, [pathname, router]);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin/login');
  };

  if (pathname === '/admin/login') return <>{children}</>;
  if (checking) {
    return (
      <div className="admin-light min-h-screen flex items-center justify-center bg-[#0f0f0f]">
        <div className="text-white/50 text-sm animate-pulse font-mono">Verifying session…</div>
      </div>
    );
  }

  return (
    <div className="admin-light min-h-screen flex bg-[#0f0f0f] font-sans">
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-[#151515] border-r border-white/5
        flex flex-col transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-auto
      `}>
        {/* Brand */}
        <div className="px-6 py-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <span className="text-black font-black text-xs">D</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Devastate</p>
              <p className="text-white/30 text-[10px] uppercase tracking-widest">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                  ${isActive
                    ? 'bg-white text-black'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom: View Site+Logout */}
        <div className="px-3 py-4 border-t border-white/5 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/40 hover:text-white hover:bg-white/5 transition-all"
          >
            <span className="text-base">🌐</span> View Site
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/10 transition-all cursor-pointer"
          >
            <span className="text-base">🚪</span> Logout
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile topbar */}
        <header className="lg:hidden flex items-center gap-4 px-4 py-3 bg-[#151515] border-b border-white/5">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white/60 hover:text-white p-1.5 rounded-md hover:bg-white/5 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-white font-semibold text-sm">Admin Panel</span>
        </header>

        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
