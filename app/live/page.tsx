'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { Radio, Users, Clock } from 'lucide-react'

export default function LivePage() {
  const [isLive, setIsLive] = useState(false)
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetService = new Date()
    targetService.setHours(9, 0, 0, 0)

    const interval = setInterval(() => {
      const now = new Date()
      const diff = targetService.getTime() - now.getTime()

      if (diff <= 0) {
        setIsLive(true)
        clearInterval(interval)
      } else {
        setCountdown({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <div className="relative aspect-video w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 flex flex-col items-center justify-center">
            {isLive ? (
              <iframe
                src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              />
            ) : (
              <div className="text-center p-6 z-10">
                <div className="inline-flex items-center gap-2 bg-navy border border-gold/30 px-4 py-2 rounded-full text-gold text-sm font-bold mb-4">
                  <Clock className="w-4 h-4" /> Service Commences In
                </div>
                <div className="flex gap-4 text-4xl md:text-6xl font-serif font-bold text-cream tracking-wider">
                  <div>{String(countdown.hours).padStart(2, '0')}<span className="text-xs block font-sans uppercase text-gray-500 tracking-normal mt-1">Hrs</span></div>
                  <span>:</span>
                  <div>{String(countdown.minutes).padStart(2, '0')}<span className="text-xs block font-sans uppercase text-gray-500 tracking-normal mt-1">Min</span></div>
                  <span>:</span>
                  <div>{String(countdown.seconds).padStart(2, '0')}<span className="text-xs block font-sans uppercase text-gray-500 tracking-normal mt-1">Sec</span></div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between items-start pt-2">
            <div>
              <h1 className="text-2xl font-serif font-bold text-cream">Sunday Global Devotional Miracle Encounter</h1>
              <p className="text-gray-400 text-sm mt-1">Live from the Central Tabernacle Auditorium</p>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${isLive ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-slate-800 text-slate-400'}`}>
              <Radio className="w-3 h-3" /> {isLive ? 'Live Now' : 'Offline'}
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-850 rounded-2xl flex flex-col h-[500px] lg:h-auto">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <span className="font-bold tracking-wide text-sm flex items-center gap-2"><Users className="w-4 h-4 text-gold" /> Fellowship Chat</span>
            <span className="text-xs font-semibold text-gray-500">1.2k connected</span>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
            <div className="bg-slate-850 p-2.5 rounded-xl border border-slate-800">
              <span className="font-bold text-gold block text-xs">Deacon Thomas</span>
              <p className="text-gray-300 mt-0.5">Glory to God! Expecting breakthrough power today!</p>
            </div>
          </div>
          <div className="p-4 border-t border-slate-800">
            <input 
              type="text" 
              placeholder="Join corporate agreement..." 
              className="w-full bg-slate-950 border-none p-3 rounded-xl text-sm focus:ring-1 focus:ring-gold"
            />
          </div>
        </div>
      </div>
    </div>
  )
}