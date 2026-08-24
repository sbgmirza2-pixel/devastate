'use client';

import { useEffect, useState } from 'react';

const blank = { name: '', slug: '', description: '' };
export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState(blank);
  const [editing, setEditing] = useState(null);
  const [message, setMessage] = useState('');
  const load = () => fetch('/api/admin/categories').then((response) => response.json()).then(setCategories);
  useEffect(() => { load(); }, []);
  const save = async (event) => {
    event.preventDefault();
    const response = await fetch(editing ? `/api/admin/categories/${editing}` : '/api/admin/categories', { method: editing ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    const result = await response.json();
    setMessage(response.ok ? 'Category saved.' : result.error || 'Save failed');
    if (response.ok) { setForm(blank); setEditing(null); load(); }
  };
  const remove = async (id) => { if (!confirm('Delete this category?')) return; await fetch(`/api/admin/categories/${id}`, { method: 'DELETE' }); load(); };
  return <div className="max-w-4xl space-y-6"><div><h1 className="text-white text-2xl font-bold">Categories</h1><p className="text-white/35 text-sm mt-1">Organize APK releases by category.</p></div><form onSubmit={save} className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-3"><input required placeholder="Category name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="input-dark" /><input required placeholder="URL slug" value={form.slug} onChange={(event) => setForm({ ...form, slug: event.target.value })} className="input-dark" /><input placeholder="Description" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="input-dark" /><div className="sm:col-span-3 flex gap-3"><button className="bg-white text-black rounded-xl px-5 py-2 text-sm font-bold">{editing ? 'Update' : 'Add category'}</button>{editing && <button type="button" onClick={() => { setEditing(null); setForm(blank); }} className="text-white/50 text-sm">Cancel</button>}<span className="text-emerald-400 text-sm self-center">{message}</span></div></form><div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 space-y-3">{categories.map((category) => <div key={category._id} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0"><div><p className="text-white">{category.name}</p><p className="text-white/35 text-xs">/{category.slug} {category.description && `· ${category.description}`}</p></div><div><button onClick={() => { setEditing(category._id); setForm(category); }} className="text-white/60 mr-4">Edit</button><button onClick={() => remove(category._id)} className="text-red-400/70">Delete</button></div></div>)}{categories.length === 0 && <p className="text-white/25 text-sm">No categories found.</p>}</div></div>;
}