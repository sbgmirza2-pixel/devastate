'use client';

import { useEffect, useState } from 'react';

export default function ActivityPage() {
  const [logs, setLogs] = useState([]);
  useEffect(() => { fetch('/api/admin/activity').then((response) => response.json()).then(setLogs); }, []);
  return <div className="max-w-5xl space-y-6"><div><h1 className="text-white text-2xl font-bold">Activity log</h1><p className="text-white/35 text-sm mt-1">Recent administrator actions and timestamps.</p></div><div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 space-y-3">{logs.map((log) => <div key={log._id} className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/5 pb-3 last:border-0"><p className="text-white text-sm">{log.admin || 'Admin'} {log.action} {log.entity}{log.details?.name ? ` — ${log.details.name}` : ''}</p><time className="text-white/35 text-xs">{new Date(log.createdAt).toLocaleString()}</time></div>)}{logs.length === 0 && <p className="text-white/25 text-sm">No activity recorded yet.</p>}</div></div>;
}