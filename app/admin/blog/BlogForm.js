'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const inputClass = `w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-sm
  focus:outline-none focus:border-white/30 transition placeholder-white/20`;

function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

export default function BlogForm({ initialData = {}, isEdit = false }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    slug: '',
    category: '',
    excerpt: '',
    content: '',
    readTime: '5 min read',
    date: new Date().toISOString().split('T')[0],
    ...initialData,
  });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);
  const [autoSlug, setAutoSlug] = useState(!isEdit);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };
      // Auto-generate slug from title when creating new post
      if (name === 'title' && autoSlug) {
        updated.slug = slugify(value);
      }
      return updated;
    });
  };

  const handleSlugChange = (e) => {
    setAutoSlug(false); // user manually edited slug
    setForm((prev) => ({ ...prev, slug: slugify(e.target.value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.slug || !form.content) {
      setMsg({ type: 'error', text: 'Title, slug, and content are required.' });
      return;
    }

    setSaving(true);
    setMsg(null);

    try {
      const url = isEdit ? `/api/blog/${initialData.slug}` : '/api/blog';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMsg({ type: 'success', text: isEdit ? 'Post updated!' : 'Post created!' });
        setTimeout(() => router.push('/admin/blog'), 1000);
      } else {
        setMsg({ type: 'error', text: data.error || 'Save failed' });
      }
    } catch {
      setMsg({ type: 'error', text: 'Network error' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-2xl font-bold">{isEdit ? 'Edit Post' : 'New Post'}</h1>
          <p className="text-white/30 text-sm mt-1">
            {isEdit ? `Editing: ${initialData.title}` : 'Create a new blog post'}
          </p>
        </div>
        <Link href="/admin/blog" className="text-white/30 text-sm hover:text-white transition">
          ← Back
        </Link>
      </div>

      {/* Form */}
      <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 space-y-5">
        {/* Title */}
        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">Title *</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className={inputClass}
            placeholder="Enter post title…"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">
            Slug * <span className="text-white/20 text-[10px] normal-case tracking-normal">(URL path)</span>
          </label>
          <div className="flex items-center gap-2">
            <span className="text-white/20 text-sm whitespace-nowrap">/blog/</span>
            <input
              name="slug"
              value={form.slug}
              onChange={handleSlugChange}
              className={`${inputClass} flex-1`}
              placeholder="my-post-slug"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Category */}
          <div>
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">Category</label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. Guide, Safety, Features"
            />
          </div>
          {/* Read Time */}
          <div>
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">Read Time</label>
            <input
              name="readTime"
              value={form.readTime}
              onChange={handleChange}
              className={inputClass}
              placeholder="5 min read"
            />
          </div>
          {/* Date */}
          <div>
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">
            Excerpt <span className="text-white/20 text-[10px] normal-case tracking-normal">(short description for blog list)</span>
          </label>
          <textarea
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            rows={2}
            className={`${inputClass} resize-none`}
            placeholder="One or two sentence summary…"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">
            Content * <span className="text-white/20 text-[10px] normal-case tracking-normal">(plain text, newlines become paragraphs)</span>
          </label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={14}
            className={`${inputClass} resize-y font-mono text-sm`}
            placeholder="Write your post content here…&#10;&#10;Use blank lines to separate paragraphs."
            required
          />
          <p className="text-white/20 text-xs mt-1">
            {form.content.length} characters
          </p>
        </div>

        {msg && (
          <div className={`text-sm px-4 py-3 rounded-xl border ${
            msg.type === 'success'
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              : 'bg-red-500/10 border-red-500/20 text-red-400'
          }`}>
            {msg.text}
          </div>
        )}

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="bg-white text-black font-bold text-sm px-6 py-2.5 rounded-xl uppercase tracking-widest
                       hover:bg-white/90 transition disabled:opacity-50"
          >
            {saving ? 'Saving…' : isEdit ? 'Update Post' : 'Publish Post'}
          </button>
          {isEdit && (
            <a
              href={`/blog/${form.slug}`}
              target="_blank"
              className="text-white/30 text-sm hover:text-white transition"
            >
              View live →
            </a>
          )}
        </div>
      </div>
    </form>
  );
}
