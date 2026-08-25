'use client';

import { useEffect, useState } from 'react';
import { defaultHomeContent } from '@/lib/homeDefaults';

const PAGES = [
  { value: 'home', label: '🏠 Home Page (All 15 Sections)' },
  { value: 'about', label: '📄 About Us' },
  { value: 'contact', label: '📄 Contact Us' },
  { value: 'privacy', label: '📄 Privacy Policy' },
  { value: 'terms', label: '📄 Terms & Conditions' },
  { value: 'disclaimer', label: '📄 Disclaimer' },
];

export default function PagesPage() {
  const [slug, setSlug] = useState('home');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  
  // State for markdown pages
  const [markdownContent, setMarkdownContent] = useState('');
  
  // State for structured Home page sections
  const [homeContent, setHomeContent] = useState(defaultHomeContent);

  useEffect(() => {
    setLoading(true);
    setMessage('');
    fetch(`/api/admin/pages/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (slug === 'home') {
          if (data.content && typeof data.content === 'object') {
            setHomeContent({ ...defaultHomeContent, ...data.content });
          } else {
            setHomeContent(defaultHomeContent);
          }
        } else {
          setMarkdownContent(typeof data.content === 'string' ? data.content : '');
        }
        setLoading(false);
      })
      .catch(() => {
        if (slug === 'home') setHomeContent(defaultHomeContent);
        else setMarkdownContent('');
        setLoading(false);
      });
  }, [slug]);

  const save = async (e) => {
    if (e) e.preventDefault();
    setSaving(true);
    setMessage('');
    
    try {
      const payload = slug === 'home' 
        ? { content: homeContent } 
        : { content: markdownContent };

      const res = await fetch(`/api/admin/pages/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setMessage('✅ Page saved successfully.');
        setTimeout(() => setMessage(''), 4000);
      } else {
        const err = await res.json();
        setMessage(`❌ Save failed: ${err.error || 'Unknown error'}`);
      }
    } catch {
      setMessage('❌ Network error while saving.');
    } finally {
      setSaving(false);
    }
  };

  const handleResetHomeDefaults = () => {
    if (confirm('Are you sure you want to reset all Home Page sections to default values? You will need to click "Save Changes" to apply.')) {
      setHomeContent(defaultHomeContent);
      setMessage('Defaults restored. Click "Save Changes" to persist.');
    }
  };

  // Helper updater for home sections
  const updateSection = (sectionKey, field, value) => {
    setHomeContent((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        [field]: value
      }
    }));
  };

  return (
    <div className="max-w-6xl space-y-6 pb-20">
      {/* Header & Page Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#151515] p-5 rounded-2xl border border-white/5">
        <div>
          <h1 className="text-white text-2xl font-bold">Editable Pages & Home Sections</h1>
          <p className="text-white/40 text-sm mt-1">
            Customize page content. For Home Page, each section has its own dedicated box with default values.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select 
            value={slug} 
            onChange={(e) => setSlug(e.target.value)} 
            className="input-dark bg-[#202020] text-white border-white/10 px-4 py-2.5 rounded-xl text-sm font-medium"
          >
            {PAGES.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>

          <button
            onClick={save}
            disabled={saving}
            className="bg-white hover:bg-white/90 text-black font-bold px-6 py-2.5 rounded-xl text-sm transition shadow-sm disabled:opacity-50 cursor-pointer"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {message && (
        <div className={`p-4 rounded-xl text-sm font-medium ${message.startsWith('✅') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
          {message}
        </div>
      )}

      {loading ? (
        <div className="bg-[#151515] border border-white/5 rounded-2xl p-12 text-center text-white/50 animate-pulse">
          Loading page content...
        </div>
      ) : slug === 'home' ? (
        /* HOME PAGE MULTI-SECTION BOXES */
        <div className="space-y-6">
          {/* Quick Jump Bar */}
          <div className="bg-[#181818] border border-white/5 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-white/40 font-bold uppercase tracking-wider">Quick Jump:</span>
              <a href="#box-hero" className="text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">Hero</a>
              <a href="#box-specs" className="text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">Specs</a>
              <a href="#box-screenshots" className="text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">Screenshots</a>
              <a href="#box-whatis" className="text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">What Is</a>
              <a href="#box-features" className="text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">Features</a>
              <a href="#box-gameplay" className="text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">Gameplay</a>
              <a href="#box-requirements" className="text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">Requirements</a>
              <a href="#box-update" className="text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">Update</a>
              <a href="#box-install" className="text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">Install & Safety</a>
              <a href="#box-problems" className="text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">Problems</a>
              <a href="#box-proscons" className="text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">Pros & Cons</a>
              <a href="#box-faq" className="text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">FAQ</a>
              <a href="#box-final" className="text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg">Final Words</a>
            </div>
            <button
              type="button"
              onClick={handleResetHomeDefaults}
              className="text-amber-400 hover:text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-lg font-medium cursor-pointer"
            >
              Reset to Defaults
            </button>
          </div>

          {/* BOX 1: Hero Section */}
          <div id="box-hero" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">🌟</span>
              <div>
                <h2 className="text-white font-bold text-lg">1. Hero Section</h2>
                <p className="text-white/40 text-xs">Title, description paragraphs, rating text, and download button</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Main Heading</label>
                <input
                  type="text"
                  value={homeContent.hero?.heading || ''}
                  onChange={(e) => updateSection('hero', 'heading', e.target.value)}
                  className="input-dark w-full"
                  placeholder="Devastate APK"
                />
              </div>
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Download Button Text</label>
                <input
                  type="text"
                  value={homeContent.hero?.buttonText || ''}
                  onChange={(e) => updateSection('hero', 'buttonText', e.target.value)}
                  className="input-dark w-full"
                  placeholder="Download Devastate APK Now"
                />
              </div>
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Rating Score Text</label>
                <input
                  type="text"
                  value={homeContent.hero?.ratingScore || ''}
                  onChange={(e) => updateSection('hero', 'ratingScore', e.target.value)}
                  className="input-dark w-full"
                  placeholder="4.5/5"
                />
              </div>
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Rating Review Count Text</label>
                <input
                  type="text"
                  value={homeContent.hero?.ratingReviews || ''}
                  onChange={(e) => updateSection('hero', 'ratingReviews', e.target.value)}
                  className="input-dark w-full"
                  placeholder="19k reviews"
                />
              </div>
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Descriptive Paragraphs (One per line)</label>
              <textarea
                rows={5}
                value={(homeContent.hero?.paragraphs || []).join('\n\n')}
                onChange={(e) => updateSection('hero', 'paragraphs', e.target.value.split('\n\n').filter(Boolean))}
                className="input-dark w-full font-sans text-sm"
                placeholder="Enter paragraphs separated by double enter..."
              />
            </div>
          </div>

          {/* BOX 2: App Information / Specs */}
          <div id="box-specs" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">📋</span>
              <div>
                <h2 className="text-white font-bold text-lg">2. App Information / Specs Section</h2>
                <p className="text-white/40 text-xs">Section titles (Specs are loaded dynamically from APK Manager)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">App Info Heading</label>
                <input
                  type="text"
                  value={homeContent.specs?.heading || ''}
                  onChange={(e) => updateSection('specs', 'heading', e.target.value)}
                  className="input-dark w-full"
                  placeholder="App Information"
                />
              </div>
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Table of Contents Heading</label>
                <input
                  type="text"
                  value={homeContent.specs?.tocHeading || ''}
                  onChange={(e) => updateSection('specs', 'tocHeading', e.target.value)}
                  className="input-dark w-full"
                  placeholder="Table of Contents"
                />
              </div>
            </div>
          </div>

          {/* BOX 3: Screenshots Section */}
          <div id="box-screenshots" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">🖼️</span>
              <div>
                <h2 className="text-white font-bold text-lg">3. Screenshots Section</h2>
                <p className="text-white/40 text-xs">Heading and intro text for in-game screenshots</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Section Heading</label>
                <input
                  type="text"
                  value={homeContent.screenshots?.heading || ''}
                  onChange={(e) => updateSection('screenshots', 'heading', e.target.value)}
                  className="input-dark w-full"
                  placeholder="Screenshots"
                />
              </div>
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Subtitle / Description</label>
                <input
                  type="text"
                  value={homeContent.screenshots?.description || ''}
                  onChange={(e) => updateSection('screenshots', 'description', e.target.value)}
                  className="input-dark w-full"
                  placeholder="Explore the in-game interface..."
                />
              </div>
            </div>
          </div>

          {/* BOX 4: What Is Devastate */}
          <div id="box-whatis" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">💡</span>
              <div>
                <h2 className="text-white font-bold text-lg">4. What Is Devastate?</h2>
                <p className="text-white/40 text-xs">Introduction paragraphs and match highlights</p>
              </div>
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Section Heading</label>
              <input
                type="text"
                value={homeContent.whatIs?.heading || ''}
                onChange={(e) => updateSection('whatIs', 'heading', e.target.value)}
                className="input-dark w-full"
                placeholder="What Is Devastate?"
              />
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Paragraphs (Double newline separated)</label>
              <textarea
                rows={4}
                value={(homeContent.whatIs?.paragraphs || []).join('\n\n')}
                onChange={(e) => updateSection('whatIs', 'paragraphs', e.target.value.split('\n\n').filter(Boolean))}
                className="input-dark w-full text-sm"
              />
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Highlights Heading</label>
              <input
                type="text"
                value={homeContent.whatIs?.highlightsHeading || ''}
                onChange={(e) => updateSection('whatIs', 'highlightsHeading', e.target.value)}
                className="input-dark w-full"
              />
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Highlight Bullets (One per line)</label>
              <textarea
                rows={4}
                value={(homeContent.whatIs?.highlights || []).join('\n')}
                onChange={(e) => updateSection('whatIs', 'highlights', e.target.value.split('\n').filter(Boolean))}
                className="input-dark w-full text-sm"
              />
            </div>
          </div>

          {/* BOX 5: Main Features */}
          <div id="box-features" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">✨</span>
              <div>
                <h2 className="text-white font-bold text-lg">5. Main Features</h2>
                <p className="text-white/40 text-xs">Section heading, subtitle, and feature cards</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Section Heading</label>
                <input
                  type="text"
                  value={homeContent.features?.heading || ''}
                  onChange={(e) => updateSection('features', 'heading', e.target.value)}
                  className="input-dark w-full"
                />
              </div>
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Subtitle</label>
                <input
                  type="text"
                  value={homeContent.features?.subtitle || ''}
                  onChange={(e) => updateSection('features', 'subtitle', e.target.value)}
                  className="input-dark w-full"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-white/70 text-xs font-semibold block">Feature Items (6 Cards)</label>
              {(homeContent.features?.items || []).map((feat, idx) => (
                <div key={idx} className="bg-[#202020] p-4 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-white/10 text-white text-xs font-bold px-2 py-0.5 rounded">{idx + 1}</span>
                    <input
                      type="text"
                      value={feat.title || ''}
                      onChange={(e) => {
                        const newItems = [...homeContent.features.items];
                        newItems[idx] = { ...newItems[idx], title: e.target.value };
                        updateSection('features', 'items', newItems);
                      }}
                      className="input-dark flex-1 font-bold text-sm"
                      placeholder={`Feature ${idx + 1} Title`}
                    />
                  </div>
                  <textarea
                    rows={2}
                    value={(feat.paragraphs || []).join('\n')}
                    onChange={(e) => {
                      const newItems = [...homeContent.features.items];
                      newItems[idx] = { ...newItems[idx], paragraphs: e.target.value.split('\n').filter(Boolean) };
                      updateSection('features', 'items', newItems);
                    }}
                    className="input-dark w-full text-xs"
                    placeholder="Feature description paragraphs..."
                  />
                </div>
              ))}
            </div>
          </div>

          {/* BOX 6: Gameplay Guide */}
          <div id="box-gameplay" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">🎮</span>
              <div>
                <h2 className="text-white font-bold text-lg">6. How the Gameplay Works</h2>
                <p className="text-white/40 text-xs">Starting route steps and gameplay descriptions</p>
              </div>
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Section Heading</label>
              <input
                type="text"
                value={homeContent.gameplay?.heading || ''}
                onChange={(e) => updateSection('gameplay', 'heading', e.target.value)}
                className="input-dark w-full"
              />
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Paragraphs (Double newline separated)</label>
              <textarea
                rows={3}
                value={(homeContent.gameplay?.paragraphs || []).join('\n\n')}
                onChange={(e) => updateSection('gameplay', 'paragraphs', e.target.value.split('\n\n').filter(Boolean))}
                className="input-dark w-full text-sm"
              />
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Starting Route Heading</label>
              <input
                type="text"
                value={homeContent.gameplay?.routeHeading || ''}
                onChange={(e) => updateSection('gameplay', 'routeHeading', e.target.value)}
                className="input-dark w-full"
              />
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Starting Route Steps (One per line)</label>
              <textarea
                rows={5}
                value={(homeContent.gameplay?.routeSteps || []).join('\n')}
                onChange={(e) => updateSection('gameplay', 'routeSteps', e.target.value.split('\n').filter(Boolean))}
                className="input-dark w-full text-sm"
              />
            </div>
          </div>

          {/* BOX 7: Android Requirements */}
          <div id="box-requirements" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">📱</span>
              <div>
                <h2 className="text-white font-bold text-lg">7. Android Requirements & Compatibility</h2>
                <p className="text-white/40 text-xs">Requirements grid, description and advice</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Section Heading</label>
                <input
                  type="text"
                  value={homeContent.requirements?.heading || ''}
                  onChange={(e) => updateSection('requirements', 'heading', e.target.value)}
                  className="input-dark w-full"
                />
              </div>
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Description</label>
                <input
                  type="text"
                  value={homeContent.requirements?.description || ''}
                  onChange={(e) => updateSection('requirements', 'description', e.target.value)}
                  className="input-dark w-full"
                />
              </div>
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Additional Notes (One per line)</label>
              <textarea
                rows={3}
                value={(homeContent.requirements?.notes || []).join('\n\n')}
                onChange={(e) => updateSection('requirements', 'notes', e.target.value.split('\n\n').filter(Boolean))}
                className="input-dark w-full text-sm"
              />
            </div>
          </div>

          {/* BOX 8: What Makes It Different */}
          <div id="box-different" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">🔍</span>
              <div>
                <h2 className="text-white font-bold text-lg">8. What Makes Devastate Different?</h2>
                <p className="text-white/40 text-xs">Key differentiators and character focus</p>
              </div>
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Section Heading</label>
              <input
                type="text"
                value={homeContent.different?.heading || ''}
                onChange={(e) => updateSection('different', 'heading', e.target.value)}
                className="input-dark w-full"
              />
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Intro Paragraph</label>
              <textarea
                rows={2}
                value={homeContent.different?.intro || ''}
                onChange={(e) => updateSection('different', 'intro', e.target.value)}
                className="input-dark w-full text-sm"
              />
            </div>

            <div className="space-y-3">
              {(homeContent.different?.items || []).map((item, idx) => (
                <div key={idx} className="bg-[#202020] p-4 rounded-xl border border-white/5 space-y-2">
                  <input
                    type="text"
                    value={item.title || ''}
                    onChange={(e) => {
                      const newItems = [...homeContent.different.items];
                      newItems[idx] = { ...newItems[idx], title: e.target.value };
                      updateSection('different', 'items', newItems);
                    }}
                    className="input-dark w-full font-bold text-sm"
                    placeholder="Feature Title"
                  />
                  <textarea
                    rows={3}
                    value={item.text || ''}
                    onChange={(e) => {
                      const newItems = [...homeContent.different.items];
                      newItems[idx] = { ...newItems[idx], text: e.target.value };
                      updateSection('different', 'items', newItems);
                    }}
                    className="input-dark w-full text-xs"
                    placeholder="Feature Text"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* BOX 9: How to Update */}
          <div id="box-update" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">🔄</span>
              <div>
                <h2 className="text-white font-bold text-lg">9. How to Update & Internet Connection</h2>
                <p className="text-white/40 text-xs">Update guidelines, backup advice, and offline notes</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Update Heading</label>
                <input
                  type="text"
                  value={homeContent.update?.heading || ''}
                  onChange={(e) => updateSection('update', 'heading', e.target.value)}
                  className="input-dark w-full"
                />
              </div>
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Internet Heading</label>
                <input
                  type="text"
                  value={homeContent.update?.internetHeading || ''}
                  onChange={(e) => updateSection('update', 'internetHeading', e.target.value)}
                  className="input-dark w-full"
                />
              </div>
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Update Intro</label>
              <textarea
                rows={2}
                value={homeContent.update?.intro || ''}
                onChange={(e) => updateSection('update', 'intro', e.target.value)}
                className="input-dark w-full text-sm"
              />
            </div>

            <div className="space-y-3">
              <label className="text-white/70 text-xs font-semibold block">Update Steps</label>
              {(homeContent.update?.steps || []).map((step, idx) => (
                <div key={idx} className="bg-[#202020] p-4 rounded-xl border border-white/5 space-y-2">
                  <input
                    type="text"
                    value={step.title || ''}
                    onChange={(e) => {
                      const newSteps = [...homeContent.update.steps];
                      newSteps[idx] = { ...newSteps[idx], title: e.target.value };
                      updateSection('update', 'steps', newSteps);
                    }}
                    className="input-dark w-full font-bold text-sm"
                  />
                  <textarea
                    rows={2}
                    value={step.text || ''}
                    onChange={(e) => {
                      const newSteps = [...homeContent.update.steps];
                      newSteps[idx] = { ...newSteps[idx], text: e.target.value };
                      updateSection('update', 'steps', newSteps);
                    }}
                    className="input-dark w-full text-xs"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* BOX 10: Before You Install */}
          <div id="box-before" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">⚠️</span>
              <div>
                <h2 className="text-white font-bold text-lg">10. Before You Install</h2>
                <p className="text-white/40 text-xs">Pre-installation checklist items and warnings</p>
              </div>
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Heading</label>
              <input
                type="text"
                value={homeContent.beforeInstall?.heading || ''}
                onChange={(e) => updateSection('beforeInstall', 'heading', e.target.value)}
                className="input-dark w-full"
              />
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Checklist Items (One per line)</label>
              <textarea
                rows={4}
                value={(homeContent.beforeInstall?.checklist || []).join('\n')}
                onChange={(e) => updateSection('beforeInstall', 'checklist', e.target.value.split('\n').filter(Boolean))}
                className="input-dark w-full text-sm"
              />
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Warning Note</label>
              <input
                type="text"
                value={homeContent.beforeInstall?.warning || ''}
                onChange={(e) => updateSection('beforeInstall', 'warning', e.target.value)}
                className="input-dark w-full"
              />
            </div>
          </div>

          {/* BOX 11: How to Download */}
          <div id="box-download" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">📥</span>
              <div>
                <h2 className="text-white font-bold text-lg">11. How to Download</h2>
                <p className="text-white/40 text-xs">Download instructions and step-by-step points</p>
              </div>
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Heading</label>
              <input
                type="text"
                value={homeContent.download?.heading || ''}
                onChange={(e) => updateSection('download', 'heading', e.target.value)}
                className="input-dark w-full"
              />
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Steps List (One per line)</label>
              <textarea
                rows={5}
                value={(homeContent.download?.steps || []).join('\n')}
                onChange={(e) => updateSection('download', 'steps', e.target.value.split('\n').filter(Boolean))}
                className="input-dark w-full text-sm"
              />
            </div>
          </div>

          {/* BOX 12: How to Install & Safety */}
          <div id="box-install" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">🛡️</span>
              <div>
                <h2 className="text-white font-bold text-lg">12. How to Install & Safety</h2>
                <p className="text-white/40 text-xs">Installation steps and safety tips</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Install Heading</label>
                <input
                  type="text"
                  value={homeContent.install?.heading || ''}
                  onChange={(e) => updateSection('install', 'heading', e.target.value)}
                  className="input-dark w-full"
                />
              </div>
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Safety Heading</label>
                <input
                  type="text"
                  value={homeContent.install?.safeHeading || ''}
                  onChange={(e) => updateSection('install', 'safeHeading', e.target.value)}
                  className="input-dark w-full"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-white/70 text-xs font-semibold block">Installation Steps (5 Steps)</label>
              {(homeContent.install?.steps || []).map((step, idx) => (
                <div key={idx} className="bg-[#202020] p-4 rounded-xl border border-white/5 space-y-2">
                  <input
                    type="text"
                    value={step.title || ''}
                    onChange={(e) => {
                      const newSteps = [...homeContent.install.steps];
                      newSteps[idx] = { ...newSteps[idx], title: e.target.value };
                      updateSection('install', 'steps', newSteps);
                    }}
                    className="input-dark w-full font-bold text-sm"
                  />
                  <textarea
                    rows={2}
                    value={step.text || ''}
                    onChange={(e) => {
                      const newSteps = [...homeContent.install.steps];
                      newSteps[idx] = { ...newSteps[idx], text: e.target.value };
                      updateSection('install', 'steps', newSteps);
                    }}
                    className="input-dark w-full text-xs"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Safety Tips (One per line)</label>
              <textarea
                rows={4}
                value={(homeContent.install?.safetyTips || []).join('\n')}
                onChange={(e) => updateSection('install', 'safetyTips', e.target.value.split('\n').filter(Boolean))}
                className="input-dark w-full text-sm"
              />
            </div>
          </div>

          {/* BOX 13: Common Problems */}
          <div id="box-problems" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">🛠️</span>
              <div>
                <h2 className="text-white font-bold text-lg">13. Common Problems & Solutions</h2>
                <p className="text-white/40 text-xs">Troubleshooting items and fix advice</p>
              </div>
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Section Heading</label>
              <input
                type="text"
                value={homeContent.problems?.heading || ''}
                onChange={(e) => updateSection('problems', 'heading', e.target.value)}
                className="input-dark w-full"
              />
            </div>

            <div className="space-y-3">
              {(homeContent.problems?.items || []).map((prob, idx) => (
                <div key={idx} className="bg-[#202020] p-4 rounded-xl border border-white/5 space-y-2">
                  <input
                    type="text"
                    value={prob.title || ''}
                    onChange={(e) => {
                      const newItems = [...homeContent.problems.items];
                      newItems[idx] = { ...newItems[idx], title: e.target.value };
                      updateSection('problems', 'items', newItems);
                    }}
                    className="input-dark w-full font-bold text-sm"
                  />
                  <textarea
                    rows={2}
                    value={(prob.paragraphs || []).join('\n')}
                    onChange={(e) => {
                      const newItems = [...homeContent.problems.items];
                      newItems[idx] = { ...newItems[idx], paragraphs: e.target.value.split('\n').filter(Boolean) };
                      updateSection('problems', 'items', newItems);
                    }}
                    className="input-dark w-full text-xs"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* BOX 14: Pros and Cons */}
          <div id="box-proscons" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">⚖️</span>
              <div>
                <h2 className="text-white font-bold text-lg">14. Pros, Cons & Tips</h2>
                <p className="text-white/40 text-xs">Advantages list, limitations, and user tips</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Advantages (One per line)</label>
                <textarea
                  rows={6}
                  value={(homeContent.prosCons?.advantages || []).join('\n')}
                  onChange={(e) => updateSection('prosCons', 'advantages', e.target.value.split('\n').filter(Boolean))}
                  className="input-dark w-full text-xs"
                />
              </div>
              <div>
                <label className="text-white/70 text-xs font-semibold block mb-1">Limitations (One per line)</label>
                <textarea
                  rows={6}
                  value={(homeContent.prosCons?.limitations || []).join('\n')}
                  onChange={(e) => updateSection('prosCons', 'limitations', e.target.value.split('\n').filter(Boolean))}
                  className="input-dark w-full text-xs"
                />
              </div>
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Tips for Smoother Experience (One per line)</label>
              <textarea
                rows={4}
                value={(homeContent.prosCons?.tips || []).join('\n')}
                onChange={(e) => updateSection('prosCons', 'tips', e.target.value.split('\n').filter(Boolean))}
                className="input-dark w-full text-xs"
              />
            </div>
          </div>

          {/* BOX 15: FAQ Section */}
          <div id="box-faq" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">❓</span>
                <div>
                  <h2 className="text-white font-bold text-lg">15. Frequently Asked Questions (FAQ)</h2>
                  <p className="text-white/40 text-xs">Interactive Q&A accordion list on the home page</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  const newItems = [...(homeContent.faq?.items || []), { question: 'New Question?', answer: 'Answer here.' }];
                  updateSection('faq', 'items', newItems);
                }}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition cursor-pointer"
              >
                + Add FAQ Item
              </button>
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">FAQ Section Heading</label>
              <input
                type="text"
                value={homeContent.faq?.heading || ''}
                onChange={(e) => updateSection('faq', 'heading', e.target.value)}
                className="input-dark w-full"
              />
            </div>

            <div className="space-y-3">
              {(homeContent.faq?.items || []).map((faq, idx) => (
                <div key={idx} className="bg-[#202020] p-4 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white/50 text-xs font-bold">Q{idx + 1}</span>
                    <input
                      type="text"
                      value={faq.question || ''}
                      onChange={(e) => {
                        const newItems = [...homeContent.faq.items];
                        newItems[idx] = { ...newItems[idx], question: e.target.value };
                        updateSection('faq', 'items', newItems);
                      }}
                      className="input-dark flex-1 font-bold text-sm"
                      placeholder="Question"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newItems = homeContent.faq.items.filter((_, i) => i !== idx);
                        updateSection('faq', 'items', newItems);
                      }}
                      className="text-red-400 hover:text-red-300 text-xs px-2 py-1 bg-red-500/10 rounded cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    value={faq.answer || ''}
                    onChange={(e) => {
                      const newItems = [...homeContent.faq.items];
                      newItems[idx] = { ...newItems[idx], answer: e.target.value };
                      updateSection('faq', 'items', newItems);
                    }}
                    className="input-dark w-full text-xs"
                    placeholder="Answer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* BOX 16: Final Words */}
          <div id="box-final" className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">📝</span>
              <div>
                <h2 className="text-white font-bold text-lg">16. Final Words Section</h2>
                <p className="text-white/40 text-xs">Conclusion paragraphs at the bottom of the home page</p>
              </div>
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Section Heading</label>
              <input
                type="text"
                value={homeContent.finalWords?.heading || ''}
                onChange={(e) => updateSection('finalWords', 'heading', e.target.value)}
                className="input-dark w-full"
              />
            </div>

            <div>
              <label className="text-white/70 text-xs font-semibold block mb-1">Paragraphs (Double newline separated)</label>
              <textarea
                rows={4}
                value={(homeContent.finalWords?.paragraphs || []).join('\n\n')}
                onChange={(e) => updateSection('finalWords', 'paragraphs', e.target.value.split('\n\n').filter(Boolean))}
                className="input-dark w-full text-sm"
              />
            </div>
          </div>

          {/* Bottom Save Action */}
          <div className="flex justify-end gap-4 pt-4 border-t border-white/10 sticky bottom-4 bg-[#151515]/95 backdrop-blur-sm p-4 rounded-2xl border">
            <button
              onClick={save}
              disabled={saving}
              className="bg-white hover:bg-white/90 text-black font-bold px-8 py-3 rounded-xl text-base transition shadow-lg disabled:opacity-50 cursor-pointer"
            >
              {saving ? 'Saving Changes...' : 'Save All Home Sections'}
            </button>
          </div>

        </div>
      ) : (
        /* MARKDOWN PAGES (About, Contact, Privacy, Terms, Disclaimer) */
        <form onSubmit={save} className="bg-[#181818] border border-white/5 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-white/60 text-sm font-medium">
              Editing <span className="text-white font-bold uppercase">{slug}</span> page
            </span>
            <span className="text-white/40 text-xs">Markdown supported</span>
          </div>

          <textarea
            value={markdownContent}
            onChange={(e) => setMarkdownContent(e.target.value)}
            rows={20}
            placeholder={`Write ${slug} page content in Markdown...`}
            className="input-dark font-mono text-sm w-full"
          />

          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              disabled={saving}
              className="bg-white hover:bg-white/90 text-black font-bold px-6 py-2.5 rounded-xl text-sm transition shadow-sm disabled:opacity-50 cursor-pointer"
            >
              {saving ? 'Saving...' : `Save ${slug} page`}
            </button>

            {message && <span className="text-sm font-medium">{message}</span>}
          </div>
        </form>
      )}
    </div>
  );
}