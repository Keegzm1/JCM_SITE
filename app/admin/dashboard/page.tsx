'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Video, HelpCircle } from 'lucide-react'

export default function AdminDashboard() {
  const [tab, setTab] = useState<'sermons' | 'prayers'>('sermons')
  const [prayers, setPrayers] = useState<any[]>([])
  const [sermonForm, setSermonForm] = useState({ title: '', preacher: '', videoUrl: '', date: '' })

  useEffect(() => {
    if (tab === 'prayers') fetchPrayers()
  }, [tab])

  const fetchPrayers = async () => {
    const { data } = await supabase.from('prayer_requests').select('*').order('created_at', { ascending: false })
    if (data) setPrayers(data)
  }

  const handleSermonUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    await supabase.from('sermons').insert([{
      title: sermonForm.title,
      preacher: sermonForm.preacher,
      video_url: sermonForm.videoUrl,
      date_preached: sermonForm.date
    }])
    alert('Sermon published.')
    setSermonForm({ title: '', preacher: '', videoUrl: '', date: '' })
  }

  const moderatePrayer = async (id: string, nextStatus: 'approved' | 'prayed') => {
    await supabase.from('prayer_requests').update({ status: nextStatus }).eq('id', id)
    fetchPrayers()
  }

  return (
    <div className="min-h-screen bg-slate-100 flex font-sans">
      <aside className="w-64 bg-navy text-white p-6 space-y-6">
        <h2 className="font-serif text-xl font-bold tracking-wider text-gold">JCM Authority Console</h2>
        <nav className="space-y-1">
          <button onClick={() => setTab('sermons')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${tab === 'sermons' ? 'bg-gold text-navy' : 'hover:bg-white/5'}`}>
            <Video className="w-5 h-5" /> Media CMS
          </button>
          <button onClick={() => setTab('prayers')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${tab === 'prayers' ? 'bg-gold text-navy' : 'hover:bg-white/5'}`}>
            <HelpCircle className="w-5 h-5" /> Prayer Requests
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-10 overflow-y-auto">
        {tab === 'sermons' ? (
          <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-serif font-bold text-navy mb-6">Publish Sermon</h3>
            <form onSubmit={handleSermonUpload} className="space-y-4">
              <input type="text" placeholder="Sermon Title" required value={sermonForm.title} onChange={e=>setSermonForm({...sermonForm, title: e.target.value})} className="w-full bg-slate-50 p-3 rounded-xl border border-gray-200" />
              <input type="text" placeholder="Preacher Name" required value={sermonForm.preacher} onChange={e=>setSermonForm({...sermonForm, preacher: e.target.value})} className="w-full bg-slate-50 p-3 rounded-xl border border-gray-200" />
              <input type="url" placeholder="Video URL" value={sermonForm.videoUrl} onChange={e=>setSermonForm({...sermonForm, videoUrl: e.target.value})} className="w-full bg-slate-50 p-3 rounded-xl border border-gray-200" />
              <input type="date" required value={sermonForm.date} onChange={e=>setSermonForm({...sermonForm, date: e.target.value})} className="w-full bg-slate-50 p-3 rounded-xl border border-gray-200" />
              <button type="submit" className="w-full bg-navy text-gold p-4 rounded-xl font-bold">Publish to Library</button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200"><h3 className="text-xl font-serif font-bold text-navy">Prayer Moderation</h3></div>
            <div className="divide-y divide-gray-150">
              {prayers.map((req) => (
                <div key={req.id} className="p-6 flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-gold/10 text-amber-800 uppercase tracking-wide">{req.category}</span>
                    <p className="text-gray-800 leading-relaxed font-medium">{req.request}</p>
                    <span className="text-xs text-gray-400 block font-semibold">Author: {req.name} ({req.is_anonymous ? 'Anonymous' : 'Identified User'})</span>
                  </div>
                  {req.status === 'pending' && (
                    <div className="flex gap-2 flex-shrink-0">
                      <button onClick={() => moderatePrayer(req.id, 'approved')} className="bg-emerald-600 text-white text-xs font-bold px-3 py-2 rounded-lg hover:bg-emerald-700">Approve</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}