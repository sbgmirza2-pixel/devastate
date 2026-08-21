'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MarkdownContent from '@/app/components/MarkdownContent';

const inputClass = `w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-sm
  focus:outline-none focus:border-white/30 transition placeholder-white/20`;

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function BlogForm({ initialData = {}, isEdit = false }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    slug: '',
    category: '',
    excerpt: '',
    content: '',
    coverImage: '/picblog.webp',
    readTime: '5 min read',
    date: new Date().toISOString().split('T')[0],
    ...initialData,
  });

  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);
  const [autoSlug, setAutoSlug] = useState(!isEdit);
  const [activeTab, setActiveTab] = useState('write'); // 'write' | 'preview'

  // Image Upload States
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingInside, setUploadingInside] = useState(false);

  const coverFileInputRef = useRef(null);
  const insideFileInputRef = useRef(null);
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'title' && autoSlug) {
        updated.slug = slugify(value);
      }
      return updated;
    });
  };

  const handleSlugChange = (e) => {
    setAutoSlug(false);
    setForm((prev) => ({ ...prev, slug: slugify(e.target.value) }));
  };

  // Helper to insert markdown text at cursor position
  const insertTextAtCursor = (before, after = '') => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setForm((prev) => ({ ...prev, content: prev.content + before + after }));
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentText = textarea.value;
    const selectedText = currentText.substring(start, end);

    const replacement = before + (selectedText || 'text') + after;
    const newText =
      currentText.substring(0, start) +
      replacement +
      currentText.substring(end);

    setForm((prev) => ({ ...prev, content: newText }));

    // Reset cursor
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + before.length,
        start + before.length + (selectedText.length || 4)
      );
    }, 0);
  };

  // Upload Cover Image
  const handleCoverUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingCover(true);
    setMsg(null);

    const fd = new FormData();
    fd.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: fd,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        setForm((prev) => ({ ...prev, coverImage: data.url }));
        setMsg({ type: 'success', text: 'Cover image uploaded!' });
      } else {
        setMsg({ type: 'error', text: data.error || 'Cover upload failed' });
      }
    } catch {
      setMsg({ type: 'error', text: 'Network error during image upload' });
    } finally {
      setUploadingCover(false);
      if (coverFileInputRef.current) coverFileInputRef.current.value = '';
    }
  };

  // Upload Inside/Inline Image & insert Markdown tag
  const handleInsideImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingInside(true);
    setMsg(null);

    const fd = new FormData();
    fd.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: fd,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        const altText = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
        const mdImageTag = `\n\n![${altText}](${data.url})\n\n`;

        // Insert at cursor
        const textarea = textareaRef.current;
        if (textarea) {
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const currentText = textarea.value;
          const newText =
            currentText.substring(0, start) +
            mdImageTag +
            currentText.substring(end);
          setForm((prev) => ({ ...prev, content: newText }));
        } else {
          setForm((prev) => ({ ...prev, content: prev.content + mdImageTag }));
        }

        setMsg({ type: 'success', text: `Inline image uploaded and inserted!` });
      } else {
        setMsg({ type: 'error', text: data.error || 'Image upload failed' });
      }
    } catch {
      setMsg({ type: 'error', text: 'Network error during inline image upload' });
    } finally {
      setUploadingInside(false);
      if (insideFileInputRef.current) insideFileInputRef.current.value = '';
    }
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
        setMsg({ type: 'success', text: isEdit ? 'Post updated successfully!' : 'Post published successfully!' });
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
    <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-2xl font-bold">{isEdit ? 'Edit Post' : 'New Post'}</h1>
          <p className="text-white/30 text-sm mt-1">
            {isEdit ? `Editing: ${initialData.title}` : 'Create a new markdown blog post with cover & inside images'}
          </p>
        </div>
        <Link href="/admin/blog" className="text-white/30 text-sm hover:text-white transition">
          ← Back to Posts
        </Link>
      </div>

      {/* Main Settings Card */}
      <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 space-y-5">
        
        {/* Title */}
        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">
            Post Title *
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. How to Install Devastate APK on PC"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">
            Slug (URL Path) *
          </label>
          <div className="flex items-center gap-2">
            <span className="text-white/20 text-sm font-mono whitespace-nowrap">/blog/</span>
            <input
              name="slug"
              value={form.slug}
              onChange={handleSlugChange}
              className={`${inputClass} font-mono`}
              placeholder="my-post-slug"
              required
            />
          </div>
        </div>

        {/* Category, Read Time, Date */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">
              Category
            </label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. PC Guide, Safety, Fixes"
            />
          </div>
          <div>
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">
              Read Time
            </label>
            <input
              name="readTime"
              value={form.readTime}
              onChange={handleChange}
              className={inputClass}
              placeholder="5 min read"
            />
          </div>
          <div>
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={form.date || ''}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Cover Image Section */}
        <div className="border-t border-white/5 pt-5">
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
            Cover Image (Hero / Thumbnail)
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            
            {/* Preview Box */}
            <div className="sm:col-span-4 aspect-[16/9] bg-black/40 rounded-xl overflow-hidden border border-white/10 relative flex items-center justify-center">
              {form.coverImage ? (
                <img
                  src={form.coverImage}
                  alt="Cover Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white/20 text-xs">No Cover</span>
              )}
              {uploadingCover && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-xs text-white">
                  Uploading...
                </div>
              )}
            </div>

            {/* Inputs & Actions */}
            <div className="sm:col-span-8 space-y-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => coverFileInputRef.current?.click()}
                  disabled={uploadingCover}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition cursor-pointer flex items-center gap-1.5"
                >
                  📁 {uploadingCover ? 'Uploading...' : 'Upload Cover Image'}
                </button>
                {form.coverImage && (
                  <button
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, coverImage: '' }))}
                    className="text-red-400 text-xs hover:underline px-2 py-1"
                  >
                    Clear
                  </button>
                )}
              </div>
              <input
                ref={coverFileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleCoverUpload}
              />
              <input
                name="coverImage"
                value={form.coverImage || ''}
                onChange={handleChange}
                className={inputClass}
                placeholder="Or paste cover image URL (e.g. /picblog.webp)"
              />
            </div>

          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">
            Excerpt / Meta Summary
          </label>
          <textarea
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            rows={2}
            className={`${inputClass} resize-none`}
            placeholder="Short summary for search results and social cards..."
          />
        </div>

      </div>

      {/* Content & Markdown Editor Card */}
      <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 space-y-4">
        
        {/* Editor Toolbar Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-3">
          
          {/* Write / Preview Tab Switch */}
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveTab('write')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                activeTab === 'write'
                  ? 'bg-white text-black'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              ✍️ Write
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-white text-black'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              👁 Preview
            </button>
          </div>

          {/* Quick Markdown & Inside Image Upload Helpers */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => insideFileInputRef.current?.click()}
              disabled={uploadingInside}
              className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg transition border border-emerald-500/30 cursor-pointer flex items-center gap-1"
              title="Upload inside image and insert markdown tag"
            >
              📸 {uploadingInside ? 'Uploading...' : 'Insert Image'}
            </button>
            <input
              ref={insideFileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleInsideImageUpload}
            />

            <button
              type="button"
              onClick={() => insertTextAtCursor('## ')}
              className="bg-white/5 hover:bg-white/10 text-white text-xs px-2.5 py-1.5 rounded-lg font-bold"
              title="Heading 2"
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => insertTextAtCursor('### ')}
              className="bg-white/5 hover:bg-white/10 text-white text-xs px-2.5 py-1.5 rounded-lg font-bold"
              title="Heading 3"
            >
              H3
            </button>
            <button
              type="button"
              onClick={() => insertTextAtCursor('**', '**')}
              className="bg-white/5 hover:bg-white/10 text-white text-xs px-2.5 py-1.5 rounded-lg font-bold"
              title="Bold"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => insertTextAtCursor('*', '*')}
              className="bg-white/5 hover:bg-white/10 text-white text-xs px-2.5 py-1.5 rounded-lg italic"
              title="Italic"
            >
              I
            </button>
            <button
              type="button"
              onClick={() => insertTextAtCursor('\n* ')}
              className="bg-white/5 hover:bg-white/10 text-white text-xs px-2.5 py-1.5 rounded-lg"
              title="Bullet List"
            >
              • List
            </button>
            <button
              type="button"
              onClick={() => insertTextAtCursor('\n1. ')}
              className="bg-white/5 hover:bg-white/10 text-white text-xs px-2.5 py-1.5 rounded-lg"
              title="Numbered List"
            >
              1. List
            </button>
            <button
              type="button"
              onClick={() => insertTextAtCursor('\n> ')}
              className="bg-white/5 hover:bg-white/10 text-white text-xs px-2.5 py-1.5 rounded-lg"
              title="Quote"
            >
              ” Quote
            </button>
            <button
              type="button"
              onClick={() => insertTextAtCursor('[Link Text](', ')')}
              className="bg-white/5 hover:bg-white/10 text-white text-xs px-2.5 py-1.5 rounded-lg"
              title="Link"
            >
              🔗 Link
            </button>
            <button
              type="button"
              onClick={() => insertTextAtCursor('\n| Column 1 | Column 2 |\n|---|---|\n| Data 1 | Data 2 |\n')}
              className="bg-white/5 hover:bg-white/10 text-white text-xs px-2.5 py-1.5 rounded-lg"
              title="Table"
            >
              📊 Table
            </button>
          </div>

        </div>

        {/* Write Mode Textarea */}
        {activeTab === 'write' ? (
          <div>
            <textarea
              ref={textareaRef}
              name="content"
              value={form.content}
              onChange={handleChange}
              rows={18}
              className={`${inputClass} font-mono text-sm leading-relaxed`}
              placeholder="Write your markdown content here...&#10;&#10;Use ## for headings, **bold**, *italic*, and 📸 Insert Image button above to upload and embed images anywhere inside this article."
              required
            />
            <div className="flex justify-between items-center text-white/30 text-xs mt-2 font-mono">
              <span>{form.content.split(/\s+/).filter(Boolean).length} words</span>
              <span>{form.content.length} characters</span>
            </div>
          </div>
        ) : (
          /* Live Preview Mode */
          <div className="bg-[#EFECE6] p-6 sm:p-8 rounded-2xl text-black min-h-[400px] max-h-[600px] overflow-y-auto border border-black/10">
            {form.coverImage && (
              <div className="aspect-[16/8] rounded-xl overflow-hidden mb-6 bg-black/10">
                <img
                  src={form.coverImage}
                  alt="Cover preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-heading), sans-serif' }}>
              {form.title || 'Untitled Post'}
            </h1>
            <MarkdownContent content={form.content || '*No content written yet.*'} />
          </div>
        )}

      </div>

      {/* Notifications */}
      {msg && (
        <div className={`text-sm px-4 py-3 rounded-xl border ${
          msg.type === 'success'
            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
            : 'bg-red-500/10 border-red-500/20 text-red-400'
        }`}>
          {msg.text}
        </div>
      )}

      {/* Form Action Buttons */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={saving || uploadingCover || uploadingInside}
          className="bg-white text-black font-bold text-sm px-8 py-3 rounded-xl uppercase tracking-widest hover:bg-white/90 transition disabled:opacity-50 cursor-pointer shadow-md"
        >
          {saving ? 'Saving...' : isEdit ? 'Update Post' : 'Publish Post'}
        </button>

        {isEdit && form.slug && (
          <Link
            href={`/blog/${form.slug}`}
            target="_blank"
            className="text-white/40 text-xs uppercase tracking-wider hover:text-white transition"
          >
            View Live Post ↗
          </Link>
        )}
      </div>

    </form>
  );
}
