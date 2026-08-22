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
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
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
        setMsg({ type: 'success', text: 'Settings saved successfully!' });
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
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-white text-2xl font-bold">Site & SEO Settings</h1>
        <p className="text-white/30 text-sm mt-1">Configure global SEO, Google Analytics 4, Search Console verification, and site metadata.</p>
      </div>

      {/* General Settings */}
      <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 space-y-5">
        <h2 className="text-white font-semibold text-sm uppercase tracking-widest">General Configuration</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">Site Name</label>
            <input name="siteName" value={form.siteName || ''} onChange={handleChange} className={inputClass} placeholder="Devastate APK" />
          </div>
          <div>
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">Canonical Site URL</label>
            <input name="siteUrl" value={form.siteUrl || ''} onChange={handleChange} className={inputClass} placeholder="https://thedevastate.com" />
          </div>
          <div>
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">Contact Email</label>
            <input name="contactEmail" value={form.contactEmail || ''} onChange={handleChange} className={inputClass} placeholder="contact@thedevastate.com" />
          </div>
          <div>
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">Hreflang / Language Code</label>
            <input name="language" value={form.language || 'en'} onChange={handleChange} className={inputClass} placeholder="en or en-US" />
          </div>
        </div>

        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">
            Site Description <span className="text-white/20 text-[10px] normal-case tracking-normal">(Default SEO meta description)</span>
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

      {/* SEO & Tracking Integrations */}
      <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 space-y-5">
        <h2 className="text-white font-semibold text-sm uppercase tracking-widest">SEO & Analytics Integrations</h2>

        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">
            Google Analytics 4 (GA4) Measurement ID
          </label>
          <input
            name="gaMeasurementId"
            value={form.gaMeasurementId || ''}
            onChange={handleChange}
            className={inputClass}
            placeholder="G-XXXXXXXXXX"
          />
          <p className="text-white/25 text-xs mt-1">
            Tracks page views, downloads, sources, and real-time visitor traffic without slowing down Core Web Vitals.
          </p>
        </div>

        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">
            Google Search Console Verification Token / Meta Code
          </label>
          <input
            name="gscVerificationToken"
            value={form.gscVerificationToken || ''}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. google-site-verification-token or full meta content"
          />
          <p className="text-white/25 text-xs mt-1">
            Used for Google Search Console domain ownership verification and sitemap indexing.
          </p>
        </div>

        {/* Indexing Switch */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <div>
            <p className="text-white text-sm font-medium">Search Engine Indexing (Robots & Sitemap)</p>
            <p className="text-white/30 text-xs">Allow Googlebot and search engines to index and rank your site</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="allowIndexing"
              checked={form.allowIndexing !== false}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
          </label>
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
        className="bg-white text-black font-bold text-sm px-8 py-3 rounded-xl uppercase tracking-widest
                   hover:bg-white/90 transition disabled:opacity-50 cursor-pointer shadow-md"
      >
        {saving ? 'Saving…' : 'Save Settings'}
      </button>
    </div>
  );
}
