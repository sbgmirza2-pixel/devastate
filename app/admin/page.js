'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [apps, setApps] = useState([
    { id: 1, title: 'Devastate APK', version: '1.0.4', size: '45 MB', category: 'Gaming', downloadLink: 'https://example.com/download', description: 'High performance gaming APK with custom tweaks.' }
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    version: '',
    size: '',
    category: 'Gaming',
    downloadLink: '',
    description: '',
    changelog: '',
    screenshots: ''
  });

  const handleOpenAddModal = () => {
    setIsEditing(false);
    setFormData({ title: '', version: '', size: '', category: 'Gaming', downloadLink: '', description: '', changelog: '', screenshots: '' });
    setIsOpen(true);
  };

  const handleOpenEditModal = (app) => {
    setIsEditing(true);
    setCurrentId(app.id);
    setFormData(app);
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setApps(apps.map(app => app.id === currentId ? { ...formData, id: currentId } : app));
    } else {
      const newApp = { ...formData, id: Date.now() };
      setApps([...apps, newApp]);
    }
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    setApps(apps.filter(app => app.id !== id));
  };

  const handleLogout = () => {
    // Yahan aap auth token clear kar sakti hain (e.g., localStorage.removeItem('token'))
    router.push('/login');
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-14 px-6 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Top Header Banner with Add & Logout Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-black/10">
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            ADMIN CONTROL PANEL
          </h1>
          <p className="text-black/60 text-sm mt-1">
            Manage your mobile applications, releases, version controls, and assets seamlessly.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={handleOpenAddModal}
            className="bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition shadow-sm flex items-center gap-2"
          >
            <span>+ Add New App</span>
          </button>
          
          <button 
            onClick={handleLogout}
            className="bg-gray-100 hover:bg-red-50 hover:text-red-600 text-black font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition shadow-sm border border-black/10"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Active Applications List */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold uppercase tracking-wide mb-4">
          Active Applications ({apps.length})
        </h3>

        {apps.map((app) => (
          <div key={app.id} className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h4 className="font-extrabold text-lg text-black">{app.title}</h4>
                <span className="bg-black/5 text-black text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {app.category}
                </span>
              </div>
              <p className="text-xs text-black/60">
                Version: <span className="font-bold text-black">{app.version}</span> &bull; Size: <span className="font-bold text-black">{app.size}</span>
              </p>
              {app.downloadLink && (
                <p className="text-xs text-blue-600 truncate max-w-md pt-1">
                  <a href={app.downloadLink} target="_blank" rel="noreferrer" className="underline hover:opacity-80">
                    {app.downloadLink}
                  </a>
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center">
              <button 
                onClick={() => handleOpenEditModal(app)}
                className="bg-gray-100 hover:bg-black hover:text-white text-black text-xs font-bold px-4 py-2 rounded-xl transition uppercase tracking-wider"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDelete(app.id)}
                className="bg-red-50 hover:bg-red-600 hover:text-white text-red-600 text-xs font-bold px-4 py-2 rounded-xl transition uppercase tracking-wider"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {apps.length === 0 && (
          <div className="bg-white border border-black/10 rounded-2xl p-12 text-center text-black/50 text-sm">
            No applications available. Click &quot;Add New App&quot; above to create one.
          </div>
        )}
      </div>

      {/* Modal Popup Form */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-black/20 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-black/10">
              <h3 className="text-xl font-extrabold uppercase tracking-wide">
                {isEditing ? 'Edit Application' : 'Add New Application'}
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-black hover:text-white text-black flex items-center justify-center font-bold text-sm transition"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-black/70 mb-1.5">App Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Devastate APK"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                    className="w-full bg-gray-50 border border-black/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-black/70 mb-1.5">Category</label>
                  <input 
                    type="text" 
                    placeholder="Gaming / Tools"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    required
                    className="w-full bg-gray-50 border border-black/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-black/70 mb-1.5">Version</label>
                  <input 
                    type="text" 
                    placeholder="1.0.4"
                    value={formData.version}
                    onChange={(e) => setFormData({...formData, version: e.target.value})}
                    required
                    className="w-full bg-gray-50 border border-black/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-black/70 mb-1.5">Size</label>
                  <input 
                    type="text" 
                    placeholder="45 MB"
                    value={formData.size}
                    onChange={(e) => setFormData({...formData, size: e.target.value})}
                    required
                    className="w-full bg-gray-50 border border-black/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-black/70 mb-1.5">Download URL</label>
                <input 
                  type="url" 
                  placeholder="https://..."
                  value={formData.downloadLink}
                  onChange={(e) => setFormData({...formData, downloadLink: e.target.value})}
                  required
                  className="w-full bg-gray-50 border border-black/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-black/70 mb-1.5">Description</label>
                <textarea 
                  rows="3"
                  placeholder="App summary..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                  className="w-full bg-gray-50 border border-black/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black transition resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-black/70 mb-1.5">Changelog</label>
                  <input 
                    type="text" 
                    placeholder="Bug fixes, performance boost"
                    value={formData.changelog}
                    onChange={(e) => setFormData({...formData, changelog: e.target.value})}
                    className="w-full bg-gray-50 border border-black/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-black/70 mb-1.5">Screenshot URLs</label>
                  <input 
                    type="text" 
                    placeholder="https://img1.jpg, https://img2.jpg"
                    value={formData.screenshots}
                    onChange={(e) => setFormData({...formData, screenshots: e.target.value})}
                    className="w-full bg-gray-50 border border-black/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black transition"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)}
                  className="w-1/2 bg-gray-100 hover:bg-gray-200 text-black font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="w-1/2 bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition shadow-sm"
                >
                  {isEditing ? 'Save Changes' : 'Publish App'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}