'use client';

import { useEffect, useState } from 'react';

export default function DownloadsPage() {
  const [apk, setApk] = useState(null);
  const [message, setMessage] = useState('');
  const load = () => fetch('/api/apk').then((response) => response.json()).then(setApk);
  useEffect(() => { load(); }, []);
  const save = async (event) => { event.preventDefault(); const body = Object.fromEntries(new FormData(event.currentTarget)); const response = await fetch('/api/apk', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }); setMessage(response.ok ? 'Download settings saved.' : 'Save failed.'); load(); };
  if (!apk) return <p className="text-white/35 text-sm animate-pulse">Loading downloads...</p>;
  return <div className="max-w-3xl space-y-6"><div><h1 className="text-white text-2xl font-bold">Download management</h1><p className="text-white/35 text-sm mt-1">Change the live download links shown on the website.</p></div><form onSubmit={save} className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 space-y-4">{[['downloadUrl', 'Main download link'], ['mirrorDownloadUrl', 'Mirror link'], ['size', 'File size'], ['sizeBytes', 'File size in bytes']].map(([name, label]) => <label key={name} className="block text-white/45 text-xs uppercase tracking-widest">{label}<input name={name} type={name === 'sizeBytes' ? 'number' : 'text'} value={apk[name] || ''} onChange={(event) => setApk({ ...apk, [name]: event.target.value })} className="input-dark mt-1" /></label>)}<div className="grid grid-cols-2 gap-4"><div><p className="text-white/35 text-xs uppercase">Download count</p><p className="text-white text-2xl">{(apk.downloadCount || 0).toLocaleString()}</p></div><div><p className="text-white/35 text-xs uppercase">Link status</p><p className="text-emerald-400 text-sm mt-2">{apk.downloadUrl ? 'Configured' : 'Missing'}</p></div></div>{message && <p className="text-emerald-400 text-sm">{message}</p>}<button className="bg-white text-black rounded-xl px-5 py-2.5 text-sm font-bold">Save download settings</button></form></div>;
}