'use client';

import { useState, useEffect } from 'react';

const inputClass = `w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-sm
  focus:outline-none focus:border-white/30 transition placeholder-white/20`;

const SOCIAL_KEYS = ['facebook', 'twitter', 'instagram', 'reddit', 'youtube', 'telegram', 'tiktok', 'pinterest'];

export default function AdminSettingsPage() {
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    fetch('/api/settings').then((r) => r.json()).then(setForm);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, socialLinks: { ...prev.socialLinks, [name]: value } }));
  };

  const handleSave = async () => {
    setSaving(true);
    setMsg(null);
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setForm(data);
        setMsg({ type: 'success', text: 'Settings saved!' });
      } else {
        setMsg({ type: 'error', text: data.error || 'Save failed' });
      }
    } catch {
      setMsg({ type: 'error', text: 'Network error' });
    } finally {
      setSaving(false);
    }
  };

  if (!form) return <div className="text-white/30 animate-pulse text-sm">Loading settings…</div>;

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-white text-2xl font-bold">Site Settings</h1>
        <p className="text-white/30 text-sm mt-1">Global site configuration and social links.</p>
      </div>

      {/* General */}
      <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 space-y-5">
        <h2 className="text-white font-semibold text-sm uppercase tracking-widest">General</h2>

        {[
          { name: 'siteName', label: 'Site Name', placeholder: 'Devastate APK' },
          { name: 'siteUrl', label: 'Site URL', placeholder: 'https://devastateapk.com' },
          { name: 'contactEmail', label: 'Contact Email', placeholder: 'contact@example.com' },
        ].map(({ name, label, placeholder }) => (
          <div key={name}>
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">{label}</label>
            <input name={name} value={form[name] || ''} onChange={handleChange} className={inputClass} placeholder={placeholder} />
          </div>
        ))}

        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">
            Site Description <span className="text-white/20 text-[10px] normal-case tracking-normal">(SEO meta description)</span>
          </label>
          <textarea
            name="siteDescription"
            value={form.siteDescription || ''}
            onChange={handleChange}
            rows={3}
            className={`${inputClass} resize-none`}
          />
        </div>

        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">Footer Text</label>
          <textarea
            name="footerText"
            value={form.footerText || ''}
            onChange={handleChange}
            rows={2}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 space-y-4">
        <h2 className="text-white font-semibold text-sm uppercase tracking-widest">Social Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SOCIAL_KEYS.map((key) => (
            <div key={key}>
              <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5 capitalize">{key}</label>
              <input
                name={key}
                value={form.socialLinks?.[key] || ''}
                onChange={handleSocialChange}
                className={inputClass}
                placeholder={`https://${key}.com/...`}
              />
            </div>
          ))}
        </div>
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

      <button
        onClick={handleSave}
        disabled={saving}
        className="bg-white text-black font-bold text-sm px-6 py-2.5 rounded-xl uppercase tracking-widest
                   hover:bg-white/90 transition disabled:opacity-50"
      >
        {saving ? 'Saving…' : 'Save Settings'}
      </button>
    </div>
  );
}
