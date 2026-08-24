'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const metrics = [
  ['Total APKs', 'totalApks', '/admin/apk'],
  ['Published APKs', 'publishedApks', '/admin/apk'],
  ['Draft APKs', 'drafts', '/admin/apk'],
  ['Total categories', 'categories', '/admin/categories'],
  ['Total downloads', 'downloads', null],
];

function Metric({ label, value, href }) {
  const content = <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 hover:border-white/15 transition"><p className="text-white/35 text-[10px] uppercase tracking-widest">{label}</p><p className="text-white text-3xl font-bold mt-2">{value.toLocaleString()}</p></div>;
  return href ? <Link href={href}>{content}</Link> : content;
}

export default function DashboardClient() {
  const [dashboard, setDashboard] = useState(null);
  const [activity, setActivity] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([fetch('/api/admin/dashboard'), fetch('/api/admin/activity')])
      .then(async ([dashboardResponse, activityResponse]) => {
        const dashboardData = await dashboardResponse.json();
        const activityData = await activityResponse.json();
        if (!dashboardResponse.ok) throw new Error(dashboardData.error || 'Unable to load dashboard');
        setDashboard(dashboardData);
        setActivity(Array.isArray(activityData) ? activityData : []);
      })
      .catch((loadError) => setError(loadError.message));
  }, []);

  if (error) return <p className="text-red-400 text-sm">{error}</p>;
  if (!dashboard) return <p className="text-white/35 text-sm animate-pulse">Loading dashboard...</p>;

  return <div className="space-y-8 max-w-6xl">
    <div><h1 className="text-white text-2xl font-bold">Dashboard</h1><p className="text-white/35 text-sm mt-1">Live overview from MongoDB.</p></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">{metrics.map(([label, key, href]) => <Metric key={key} label={label} value={dashboard[key] || 0} href={href} />)}</div>
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {[
        ['Recently added APKs', dashboard.recentAdded],
        ['Recently updated APKs', dashboard.recentUpdated],
      ].map(([title, items]) => <section key={title} className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6"><h2 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">{title}</h2>{items.length === 0 ? <p className="text-white/25 text-sm">No APK records yet.</p> : <div className="space-y-3">{items.map((item) => <div key={item._id} className="flex justify-between border-b border-white/5 pb-3 last:border-0"><span className="text-white text-sm">{item.appName || item.name || item.slug}</span><span className="text-white/35 text-xs">{item.version || 'No version'}</span></div>)}</div>}</section>)}
      <section className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 xl:col-span-2"><div className="flex items-center justify-between mb-4"><h2 className="text-white font-semibold text-sm uppercase tracking-widest">Activity log</h2><Link href="/admin/activity" className="text-white/40 text-xs hover:text-white">View all</Link></div>{activity.length === 0 ? <p className="text-white/25 text-sm">No activity recorded yet.</p> : <div className="space-y-3">{activity.slice(0, 8).map((item) => <div key={item._id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-white/5 pb-3 last:border-0"><p className="text-white text-sm">{item.admin || 'Admin'} {item.action} {item.entity}{item.details?.name ? ` — ${item.details.name}` : ''}</p><time className="text-white/30 text-xs" dateTime={item.createdAt}>{new Date(item.createdAt).toLocaleString()}</time></div>)}</div>}</section>
    </div>
  </div>;
}