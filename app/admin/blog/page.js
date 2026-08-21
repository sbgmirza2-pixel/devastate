'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminBlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const router = useRouter();

  const fetchPosts = () => {
    fetch('/api/blog').then((r) => r.json()).then((data) => {
      setPosts(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleDelete = async (slug, title) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(slug);
    await fetch(`/api/blog/${slug}`, { method: 'DELETE' });
    fetchPosts();
    setDeleting(null);
  };

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-2xl font-bold">Blog Posts</h1>
          <p className="text-white/30 text-sm mt-1">{posts.length} published post{posts.length !== 1 ? 's' : ''}</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="bg-white text-black font-bold text-xs px-5 py-2.5 rounded-xl uppercase tracking-widest hover:bg-white/90 transition"
        >
          + New Post
        </Link>
      </div>

      {/* Posts List */}
      <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-white/30 text-sm animate-pulse text-center">Loading posts…</div>
        ) : posts.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-white/30 text-sm mb-4">No blog posts yet.</p>
            <Link href="/admin/blog/new" className="text-white text-sm font-medium hover:underline">
              Create your first post →
            </Link>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-white/30 text-left text-[10px] uppercase tracking-widest px-5 py-3 font-medium">Title</th>
                <th className="text-white/30 text-left text-[10px] uppercase tracking-widest px-5 py-3 font-medium hidden sm:table-cell">Category</th>
                <th className="text-white/30 text-left text-[10px] uppercase tracking-widest px-5 py-3 font-medium hidden sm:table-cell">Date</th>
                <th className="px-5 py-3 w-28"></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
                  <td className="px-5 py-4">
                    <p className="text-white font-medium">{post.title}</p>
                    <p className="text-white/25 text-xs mt-0.5 font-mono">/blog/{post.slug}</p>
                  </td>
                  <td className="px-5 py-4 text-white/40 hidden sm:table-cell">{post.category}</td>
                  <td className="px-5 py-4 text-white/40 hidden sm:table-cell">{post.date}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 justify-end">
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="text-white/25 text-xs hover:text-white/60 transition p-1"
                        title="View post"
                      >
                        👁
                      </Link>
                      <Link
                        href={`/admin/blog/${post.slug}`}
                        className="text-white/40 text-xs hover:text-white transition px-3 py-1.5 rounded-lg hover:bg-white/5"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(post.slug, post.title)}
                        disabled={deleting === post.slug}
                        className="text-red-400/50 text-xs hover:text-red-400 transition px-3 py-1.5 rounded-lg hover:bg-red-500/10 disabled:opacity-30"
                      >
                        {deleting === post.slug ? '…' : 'Del'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
