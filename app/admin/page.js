import { readData } from '@/lib/dataUtils';
import Link from 'next/link';

export const metadata = { title: 'Admin Dashboard — Devastate' };

function StatCard({ label, value, sub, href }) {
  const card = (
    <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all">
      <p className="text-white/30 text-xs uppercase tracking-widest mb-2">{label}</p>
      <p className="text-white text-3xl font-bold">{value}</p>
      {sub && <p className="text-white/30 text-xs mt-1">{sub}</p>}
    </div>
  );
  return href ? <Link href={href}>{card}</Link> : card;
}

export default function AdminDashboard() {
  const apk = readData('apkData.json');
  const posts = readData('blogPosts.json');
  const stats = readData('stats.json');

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div>
        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
        <p className="text-white/30 text-sm mt-1">Welcome back. Here's your site overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          label="Total Downloads"
          value={stats.totalDownloads?.toLocaleString() ?? 0}
          sub={stats.lastDownloadAt ? `Last: ${new Date(stats.lastDownloadAt).toLocaleDateString()}` : 'No downloads yet'}
        />
        <StatCard
          label="APK Version"
          value={`v${apk.version}`}
          sub={`Updated: ${apk.updatedAt}`}
          href="/admin/apk"
        />
        <StatCard
          label="Blog Posts"
          value={posts.length}
          sub="Published posts"
          href="/admin/blog"
        />
      </div>

      {/* APK Quick Info */}
      <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-sm uppercase tracking-widest">Current APK</h2>
          <Link href="/admin/apk" className="text-white/40 text-xs hover:text-white transition uppercase tracking-widest">
            Edit →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          {[
            ['App Name', apk.appName],
            ['Version', apk.version],
            ['Size', apk.size],
            ['Android', apk.androidRequired],
            ['Package', apk.packageName],
            ['Developer', apk.developer],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">{k}</p>
              <p className="text-white font-medium text-xs">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Blog Posts */}
      <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-sm uppercase tracking-widest">Recent Posts</h2>
          <div className="flex gap-3">
            <Link href="/admin/blog/new" className="text-white/40 text-xs hover:text-white transition uppercase tracking-widest">
              + New
            </Link>
            <Link href="/admin/blog" className="text-white/40 text-xs hover:text-white transition uppercase tracking-widest">
              All →
            </Link>
          </div>
        </div>
        {posts.length === 0 ? (
          <p className="text-white/20 text-sm">No posts yet.</p>
        ) : (
          <div className="space-y-3">
            {posts.slice(0, 5).map((post) => (
              <div key={post.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <div>
                  <p className="text-white text-sm font-medium">{post.title}</p>
                  <p className="text-white/30 text-xs">{post.category} · {post.date}</p>
                </div>
                <Link
                  href={`/admin/blog/${post.slug}`}
                  className="text-white/30 text-xs hover:text-white transition uppercase tracking-widest"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { href: '/admin/apk', label: 'Update APK', icon: '📦' },
          { href: '/admin/blog/new', label: 'New Blog Post', icon: '✍️' },
          { href: '/admin/settings', label: 'Site Settings', icon: '⚙️' },
        ].map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="flex items-center gap-3 bg-white/5 hover:bg-white/8 border border-white/5 hover:border-white/10
                       rounded-2xl px-5 py-4 text-white text-sm font-medium transition-all"
          >
            <span className="text-xl">{action.icon}</span>
            {action.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
