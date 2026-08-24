'use client';

import { useEffect, useRef, useState } from 'react';

export default function MediaPage() {
  const [media, setMedia] = useState([]);
  const [kind, setKind] = useState('screenshot');
  const input = useRef(null);
  const [replacing, setReplacing] = useState(null);
  const load = () => fetch('/api/admin/media').then((response) => response.json()).then(setMedia);
  useEffect(() => { load(); }, []);
  const upload = async (event) => { const file = event.target.files?.[0]; if (!file) return; const data = new FormData(); data.append('file', file); data.append('kind', kind); await fetch('/api/admin/media', { method: 'POST', body: data }); event.target.value = ''; load(); };
  const copy = (url) => navigator.clipboard?.writeText(`${window.location.origin}${url}`);
  const replace = async (event) => {
    const file = event.target.files?.[0];
    if (!file || !replacing) return;
    const data = new FormData();
    data.append('file', file);
    await fetch(`/api/admin/media/${replacing}`, { method: 'PUT', body: data });
    event.target.value = '';
    setReplacing(null);
    load();
  };
  const remove = async (id) => { if (confirm('Delete this image?')) { await fetch(`/api/admin/media/${id}`, { method: 'DELETE' }); load(); } };
  return <div className="max-w-6xl space-y-6"><div><h1 className="text-white text-2xl font-bold">Media library</h1><p className="text-white/35 text-sm mt-1">Upload and manage app icons, screenshots, and featured images.</p></div><div className="flex flex-wrap gap-3"><select value={kind} onChange={(event) => setKind(event.target.value)} className="input-dark"><option value="icon">App icon</option><option value="screenshot">Screenshot</option><option value="featured">Featured image</option></select><button onClick={() => input.current?.click()} className="bg-white text-black rounded-xl px-5 py-2 text-sm font-bold">Upload image</button><input ref={input} type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={upload} className="hidden" /><input id="replace-media" type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={replace} className="hidden" /></div><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">{media.map((item) => <article key={item._id} className="bg-[#1a1a1a] border border-white/5 rounded-2xl overflow-hidden"><img src={item.url} alt={item.name} className="w-full aspect-square object-cover" /><div className="p-3 space-y-2"><p className="text-white text-xs truncate">{item.name}</p><p className="text-white/35 text-[10px] uppercase">{item.kind}</p><div className="flex flex-wrap gap-2"><button onClick={() => copy(item.url)} className="text-white/60 text-xs">Copy URL</button><button onClick={() => { setReplacing(item._id); document.getElementById('replace-media')?.click(); }} className="text-white/60 text-xs">Replace</button><button onClick={() => remove(item._id)} className="text-red-400/70 text-xs">Delete</button></div></div></article>)}{media.length === 0 && <p className="text-white/25 text-sm col-span-full">No media uploaded yet.</p>}</div></div>;
}
