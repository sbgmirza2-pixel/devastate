'use client';

import { useEffect, useState } from 'react';

const pages = ['about', 'contact', 'privacy', 'terms', 'disclaimer'];
export default function PagesPage() {
  const [slug, setSlug] = useState('about');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => { fetch(`/api/admin/pages/${slug}`).then((response) => response.json()).then((data) => setContent(data.content || '')); }, [slug]);
  const save = async (event) => { event.preventDefault(); const response = await fetch(`/api/admin/pages/${slug}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content }) }); setMessage(response.ok ? 'Page saved.' : 'Save failed.'); };
  return <div className="max-w-5xl space-y-6"><div><h1 className="text-white text-2xl font-bold">Editable pages</h1><p className="text-white/35 text-sm mt-1">Markdown overrides for important site pages. Leave empty to use the built-in page.</p></div><form onSubmit={save} className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 space-y-4"><select value={slug} onChange={(event) => setSlug(event.target.value)} className="input-dark">{pages.map((page) => <option key={page} value={page}>{page}</option>)}</select><textarea value={content} onChange={(event) => setContent(event.target.value)} rows={24} placeholder="Write page content in Markdown" className="input-dark font-mono" /><div className="flex gap-4 items-center"><button className="bg-white text-black rounded-xl px-5 py-2.5 text-sm font-bold">Save page</button><span className="text-emerald-400 text-sm">{message}</span></div></form></div>;
}