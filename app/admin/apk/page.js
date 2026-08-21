'use client';

import { useState, useEffect, useRef } from 'react';

function FormField({ label, children, hint }) {
  return (
    <div>
      <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">{label}</label>
      {children}
      {hint && <p className="text-white/20 text-xs mt-1">{hint}</p>}
    </div>
  );
}

const inputClass = `w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-sm
  focus:outline-none focus:border-white/30 transition placeholder-white/20`;

export default function AdminApkPage() {
  const [data, setData] = useState(null);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);

  // Upload state
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetch('/api/apk').then((r) => r.json()).then((d) => {
      setData(d);
      setForm(d);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setMsg(null);
    try {
      const res = await fetch('/api/apk', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const updated = await res.json();
      if (res.ok) {
        setData(updated);
        setForm(updated);
        setMsg({ type: 'success', text: 'APK data saved successfully!' });
      } else {
        setMsg({ type: 'error', text: updated.error || 'Save failed' });
      }
    } catch {
      setMsg({ type: 'error', text: 'Network error' });
    } finally {
      setSaving(false);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.name.endsWith('.apk')) {
      setUploadMsg({ type: 'error', text: 'Only .apk files are allowed' });
      return;
    }

    setUploading(true);
    setUploadMsg(null);
    setUploadProgress(0);

    const fd = new FormData();
    fd.append('apkFile', file);

    try {
      // Simulate progress using XHR for real progress events
      const result = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.upload.onprogress = (ev) => {
          if (ev.lengthComputable) {
            setUploadProgress(Math.round((ev.loaded / ev.total) * 100));
          }
        };
        xhr.onload = () => resolve({ status: xhr.status, body: JSON.parse(xhr.responseText) });
        xhr.onerror = () => reject(new Error('Upload failed'));
        xhr.open('POST', '/api/apk/upload');
        xhr.send(fd);
      });

      if (result.status === 200) {
        setUploadMsg({ type: 'success', text: `✓ Uploaded! Size auto-detected: ${result.body.size}` });
        // Refresh form
        const res = await fetch('/api/apk');
        const d = await res.json();
        setData(d);
        setForm(d);
      } else {
        setUploadMsg({ type: 'error', text: result.body.error || 'Upload failed' });
      }
    } catch (err) {
      setUploadMsg({ type: 'error', text: err.message });
    } finally {
      setUploading(false);
      setUploadProgress(0);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  if (!data) {
    return (
      <div className="text-white/30 animate-pulse text-sm">Loading APK data…</div>
    );
  }

  return (
    <div className="max-w-3xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-white text-2xl font-bold">APK Manager</h1>
        <p className="text-white/30 text-sm mt-1">Upload an APK file (size auto-detected) or update metadata manually.</p>
      </div>

      {/* APK File Upload Card */}
      <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 space-y-4">
        <h2 className="text-white font-semibold text-sm uppercase tracking-widest">Upload APK File</h2>

        <div
          className="border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center
                     hover:border-white/20 transition cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <span className="text-4xl mb-3">📦</span>
          <p className="text-white/60 text-sm font-medium">Click to select .apk file</p>
          <p className="text-white/25 text-xs mt-1">Size will be detected automatically</p>
          {data.localApkPath && (
            <div className="mt-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs text-white/40">
              Current: <span className="text-white/60">{data.localApkPath}</span>
              {' · '}<span className="text-emerald-400">{data.size}</span>
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept=".apk"
          className="hidden"
          onChange={handleUpload}
        />

        {uploading && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-white/40">
              <span>Uploading…</span>
              <span>{uploadProgress}%</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
              <div
                className="bg-white h-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}

        {uploadMsg && (
          <div className={`text-sm px-4 py-3 rounded-xl border ${
            uploadMsg.type === 'success'
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              : 'bg-red-500/10 border-red-500/20 text-red-400'
          }`}>
            {uploadMsg.text}
          </div>
        )}
      </div>

      {/* Metadata Form */}
      <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 space-y-5">
        <h2 className="text-white font-semibold text-sm uppercase tracking-widest">APK Metadata</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="App Name">
            <input name="appName" value={form.appName || ''} onChange={handleChange} className={inputClass} />
          </FormField>
          <FormField label="Version">
            <input name="version" value={form.version || ''} onChange={handleChange} className={inputClass} placeholder="e.g. 1.0" />
          </FormField>
          <FormField label="File Size" hint="Auto-filled when you upload an APK file">
            <input name="size" value={form.size || ''} onChange={handleChange} className={inputClass} placeholder="e.g. 52.21 MB" />
          </FormField>
          <FormField label="Category">
            <input name="category" value={form.category || ''} onChange={handleChange} className={inputClass} />
          </FormField>
          <FormField label="Package Name">
            <input name="packageName" value={form.packageName || ''} onChange={handleChange} className={inputClass} placeholder="com.example.app" />
          </FormField>
          <FormField label="Android Required">
            <input name="androidRequired" value={form.androidRequired || ''} onChange={handleChange} className={inputClass} placeholder="Android 6.0 or higher" />
          </FormField>
          <FormField label="Architecture">
            <input name="architecture" value={form.architecture || ''} onChange={handleChange} className={inputClass} placeholder="Universal" />
          </FormField>
          <FormField label="Developer">
            <input name="developer" value={form.developer || ''} onChange={handleChange} className={inputClass} />
          </FormField>
          <FormField label="Rating">
            <input name="rating" value={form.rating || ''} onChange={handleChange} className={inputClass} placeholder="4.8" />
          </FormField>
          <FormField label="Reviews Count">
            <input name="reviews" value={form.reviews || ''} onChange={handleChange} className={inputClass} placeholder="18,995+" />
          </FormField>
          <FormField label="Release Date">
            <input type="date" name="releaseDate" value={form.releaseDate || ''} onChange={handleChange} className={inputClass} />
          </FormField>
          <FormField label="Main Use">
            <input name="mainUse" value={form.mainUse || ''} onChange={handleChange} className={inputClass} />
          </FormField>
        </div>

        <FormField label="External Download URL" hint="Used if no APK file is uploaded locally">
          <input name="downloadUrl" value={form.downloadUrl || ''} onChange={handleChange} className={inputClass} placeholder="https://..." />
        </FormField>

        <FormField label="Devices">
          <input name="devices" value={form.devices || ''} onChange={handleChange} className={inputClass} />
        </FormField>

        <FormField label="Changelog / What's New">
          <textarea
            name="changelog"
            value={form.changelog || ''}
            onChange={handleChange}
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Describe what's new in this version…"
          />
        </FormField>

        {msg && (
          <div className={`text-sm px-4 py-3 rounded-xl border ${
            msg.type === 'success'
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              : 'bg-red-500/10 border-red-500/20 text-red-400'
          }`}>
            {msg.text}
          </div>
        )}

        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-white text-black font-bold text-sm px-6 py-2.5 rounded-xl uppercase tracking-widest
                     hover:bg-white/90 transition disabled:opacity-50"
        >
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}
