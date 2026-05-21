'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { supabase } from '@/lib/supabase'
import { Heart, ShieldCheck, MessageSquare } from 'lucide-react'

export default function PrayerPage() {
  const [formData, setFormData] = useState({ name: '', category: 'Healing', request: '', isAnonymous: false })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<{ success?: boolean; msg?: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)

    const { error } = await supabase.from('prayer_requests').insert([
      {
        name: formData.isAnonymous ? 'Anonymous' : formData.name,
        category: formData.category,
        request: formData.request,
        is_anonymous: formData.isAnonymous,
        status: 'pending'
      }
    ])

    setSubmitting(false)
    if (error) {
      setStatus({ success: false, msg: "Could not submit. Please try again." })
    } else {
      setStatus({ success: true, msg: "Your prayer request has been securely sent." })
      setFormData({ name: '', category: 'Healing', request: '', isAnonymous: false })
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gold/10 rounded-xl text-gold"><Heart className="w-6 h-6" /></div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy">Submit a Prayer Request</h2>
              <p className="text-gray-500 text-sm">Our prayer warriors pray over every request daily.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!formData.isAnonymous && (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-cream border-none p-3 rounded-xl focus:ring-2 focus:ring-gold"
                />
              </div>
            )}

            <div className="flex items-center gap-2 py-2">
              <input 
                type="checkbox" 
                id="anonymous"
                checked={formData.isAnonymous}
                onChange={e => setFormData({...formData, isAnonymous: e.target.checked})}
                className="rounded border-gray-300 text-navy focus:ring-gold h-4 w-4"
              />
              <label htmlFor="anonymous" className="text-sm font-semibold text-gray-600 select-none">Submit anonymously</label>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
              <select 
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
                className="w-full bg-cream border-none p-3 rounded-xl focus:ring-2 focus:ring-gold"
              >
                {['Healing', 'Anxiety/Peace', 'Finances', 'Faith', 'Relationships', 'Guidance'].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Your Prayer Request</label>
              <textarea 
                rows={5}
                required
                value={formData.request}
                onChange={e => setFormData({...formData, request: e.target.value})}
                placeholder="Describe your situation..."
                className="w-full bg-cream border-none p-3 rounded-xl focus:ring-2 focus:ring-gold placeholder:text-gray-400"
              />
            </div>

            {status && (
              <div className={`p-4 rounded-xl text-sm font-medium ${status.success ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>
                {status.msg}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-navy text-gold py-4 rounded-xl font-bold tracking-wide hover:bg-navy/90 transition-all shadow-md disabled:opacity-50"
            >
              {submitting ? 'Transmitting Request...' : 'Send Prayer Request'}
            </button>
          </form>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-navy text-white p-6 rounded-2xl shadow-md">
            <ShieldCheck className="w-8 h-8 text-gold mb-3" />
            <h3 className="font-serif text-xl font-bold mb-2">Confidential Intercession</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Every request marked private or anonymous remains classified strictly inside administrative groups.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-gold mb-4 font-bold tracking-wide text-sm uppercase">
              <MessageSquare className="w-4 h-4" /> Recent Testimonies
            </div>
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <p className="italic text-gray-600 mb-2">"Diagnosed with a terminal structural condition. After unified corporate intercession, doctors verified absolute remission!"</p>
                <span className="text-xs font-bold text-navy">— Sister Maria, Healing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}