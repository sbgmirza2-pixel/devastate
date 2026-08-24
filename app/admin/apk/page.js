'use client';

import { useEffect, useState } from 'react';

const emptyForm = {
  appName: '', version: '', packageName: '', developer: '', category: '', size: '', sizeBytes: '',
  androidRequired: '', iconUrl: '', featuredImage: '', screenshots: [], shortDescription: '',
  description: '', features: [], changelog: '', downloadUrl: '', mirrorDownloadUrl: '',
  officialWebsite: '', releaseDate: '', slug: '', status: 'draft', downloadCount: 0,
  seo: { title: '', description: '', focusKeyword: '', canonicalUrl: '', ogTitle: '', ogDescription: '', ogImage: '', robots: 'index,follow', schema: '' },
};
const inputClass = 'w-full bg-white/5 border border-white/10 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-white/30';

export default function AdminApkPage() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(null);
  const [filters, setFilters] = useState({ search: '', status: '', category: '', version: '', updatedAfter: '' });
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState('');

  const load = () => {
    const query = new URLSearchParams(Object.entries(filters).filter(([, value]) => value));
    fetch(`/api/admin/apks?${query}`).then((response) => response.json()).then(setItems);
  };
  useEffect(() => { load(); }, [filters.search, filters.status, filters.category, filters.version, filters.updatedAfter]);

  const change = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const changeSeo = (event) => setForm((current) => ({ ...current, seo: { ...current.seo, [event.target.name]: event.target.value } }));
  const changeList = (name, event) => setForm((current) => ({ ...current, [name]: event.target.value.split('\n').map((value) => value.trim()).filter(Boolean) }));
  const edit = (item) => { setEditing(item._id); setForm({ ...emptyForm, ...item, seo: { ...emptyForm.seo, ...(item.seo || {}) }, features: item.features || [], screenshots: item.screenshots || [] }); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const save = async (event) => {
    event.preventDefault();
    setMessage('');
    const response = await fetch(editing ? `/api/admin/apks/${editing}` : '/api/admin/apks', { method: editing ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    const result = await response.json();
    if (!response.ok) return setMessage(result.error || 'Save failed');
    setMessage('APK saved successfully.'); setEditing(null); setForm(emptyForm); load();
  };
  const remove = async (id) => { if (!confirm('Delete this APK version?')) return; const response = await fetch(`/api/admin/apks/${id}`, { method: 'DELETE' }); setMessage(response.ok ? 'APK deleted.' : 'Delete failed.'); load(); };
  const uploadApk = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!editing) { setMessage('Save the APK version first, then upload its file.'); event.target.value = ''; return; }
    setUploading('apk');
    const data = new FormData(); data.append('apkFile', file); data.append('apkId', editing);
    const response = await fetch('/api/apk/upload', { method: 'POST', body: data });
    const result = await response.json();
    setMessage(response.ok ? 'APK file uploaded.' : result.error || 'APK upload failed.');
    if (response.ok) setForm((current) => ({ ...current, ...result.apk }));
    setUploading(''); event.target.value = '';
  };
  const uploadImage = async (field, files) => {
    if (!files.length) return;
    setUploading(field);
    const urls = [];
    for (const file of files) {
      const data = new FormData(); data.append('file', file); data.append('kind', field === 'iconUrl' ? 'icon' : field === 'featuredImage' ? 'featured' : 'screenshot');
      const response = await fetch('/api/admin/media', { method: 'POST', body: data });
      const result = await response.json();
      if (!response.ok) { setMessage(result.error || 'Image upload failed.'); setUploading(''); return; }
      urls.push(result.url);
    }
    setForm((current) => ({ ...current, [field]: field === 'screenshots' ? [...(current.screenshots || []), ...urls] : urls[0] }));
    setMessage('Image uploaded. Save the APK version to keep the change.'); setUploading('');
  };

  return <div className="max-w-6xl space-y-6">
    <div><h1 className="text-white text-2xl font-bold">APK Manager</h1><p className="text-white/35 text-sm mt-1">Manage published releases, drafts, and historical versions.</p></div>
    <form onSubmit={save} className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 space-y-5">
      <div className="flex items-center justify-between"><h2 className="text-white font-semibold">{editing ? 'Edit APK version' : 'Add APK version'}</h2>{editing && <button type="button" onClick={() => { setEditing(null); setForm(emptyForm); }} className="text-white/50 text-sm">Cancel</button>}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 border-b border-white/10 pb-5">
        <label className="text-white/45 text-xs uppercase tracking-widest">APK file<input type="file" accept=".apk,application/vnd.android.package-archive" onChange={uploadApk} disabled={uploading === 'apk'} className="input-dark mt-1" />{!editing && <span className="block text-amber-400/80 text-[10px] normal-case mt-1">Save the version before uploading.</span>}</label>
        <label className="text-white/45 text-xs uppercase tracking-widest">App icon<input type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={(event) => uploadImage('iconUrl', event.target.files)} className="input-dark mt-1" /></label>
        <label className="text-white/45 text-xs uppercase tracking-widest">Featured image<input type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={(event) => uploadImage('featuredImage', event.target.files)} className="input-dark mt-1" /></label>
        <label className="text-white/45 text-xs uppercase tracking-widest">Screenshots<input type="file" multiple accept="image/png,image/jpeg,image/webp,image/gif" onChange={(event) => uploadImage('screenshots', event.target.files)} className="input-dark mt-1" /></label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {['appName', 'version', 'packageName', 'developer', 'category', 'size', 'androidRequired', 'iconUrl', 'featuredImage', 'downloadUrl', 'mirrorDownloadUrl', 'officialWebsite', 'releaseDate', 'slug'].map((name) => <label key={name} className="text-white/45 text-xs uppercase tracking-widest">{name.replace(/[A-Z]/g, (letter) => ` ${letter}`)}<input required={['appName', 'version', 'packageName', 'slug'].includes(name)} name={name} value={form[name] || ''} onChange={change} className={`${inputClass} mt-1 normal-case tracking-normal`} /></label>)}
        <label className="text-white/45 text-xs uppercase tracking-widest">Status<select name="status" value={form.status} onChange={change} className={`${inputClass} mt-1`}><option value="draft">Draft</option><option value="published">Published</option></select></label>
        <label className="text-white/45 text-xs uppercase tracking-widest">Download count<input type="number" min="0" name="downloadCount" value={form.downloadCount || 0} onChange={change} className={`${inputClass} mt-1`} /></label>
      </div>
      {['shortDescription', 'description', 'changelog'].map((name) => <label key={name} className="block text-white/45 text-xs uppercase tracking-widest">{name.replace(/[A-Z]/g, (letter) => ` ${letter}`)}<textarea name={name} value={form[name] || ''} onChange={change} rows={name === 'description' ? 6 : 3} className={`${inputClass} mt-1`} /></label>)}
      {['features', 'screenshots'].map((name) => <label key={name} className="block text-white/45 text-xs uppercase tracking-widest">{name} <span className="normal-case text-white/25">(one per line)</span><textarea value={(form[name] || []).join('\n')} onChange={(event) => changeList(name, event)} rows={3} className={`${inputClass} mt-1`} /></label>)}
      <details className="border-t border-white/10 pt-4"><summary className="text-white font-semibold cursor-pointer">SEO settings</summary><div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">{Object.keys(emptyForm.seo).map((name) => <label key={name} className="text-white/45 text-xs uppercase tracking-widest">{name.replace(/[A-Z]/g, (letter) => ` ${letter}`)}{name === 'schema' ? <textarea name={name} value={form.seo[name] || ''} onChange={changeSeo} rows={3} className={`${inputClass} mt-1`} /> : <input name={name} value={form.seo[name] || ''} onChange={changeSeo} className={`${inputClass} mt-1 normal-case tracking-normal`} />}</label>)}</div></details>
      {message && <p className="text-sm text-emerald-400">{message}</p>}<button className="bg-white text-black font-bold px-5 py-2.5 rounded-xl text-sm">{editing ? 'Update version' : 'Add version'}</button>
    </form>
    <section className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 space-y-4"><h2 className="text-white font-semibold">Search and filter versions</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">{Object.keys(filters).map((name) => <input key={name} name={name} placeholder={name.replace(/[A-Z]/g, (letter) => ` ${letter}`)} value={filters[name]} onChange={(event) => setFilters((current) => ({ ...current, [name]: event.target.value }))} className={inputClass} />)}</div><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="text-white/35 text-left uppercase text-[10px] tracking-widest"><th className="py-3">Name</th><th>Version</th><th>Package</th><th>Status</th><th>Updated</th><th /></tr></thead><tbody>{items.map((item) => <tr key={item._id} className="border-t border-white/5 text-white"><td className="py-3">{item.appName}</td><td>{item.version}</td><td className="text-white/45">{item.packageName}</td><td className={item.status === 'published' ? 'text-emerald-400' : 'text-amber-400'}>{item.status}</td><td className="text-white/45">{item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : '-'}</td><td className="text-right whitespace-nowrap"><button onClick={() => edit(item)} className="text-white/60 mr-3">Edit</button><button onClick={() => remove(item._id)} className="text-red-400/70">Delete</button></td></tr>)}</tbody></table>{items.length === 0 && <p className="text-white/25 text-sm py-5">No MongoDB APK versions found.</p>}</div></section>
  </div>;
}
