'use client'

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ArrowLeft } from 'lucide-react';

export default function Live() {
  return (
    <div className="min-h-screen bg-[#0B1426]">
      <Navbar />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[#E5C170] mb-8 hover:text-white transition">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Watch Live</h1>
        <p className="text-gray-300 text-lg mb-12">Join us for live worship and preaching. Services available 24/7.</p>
        
        {/* Video Stream Placeholder */}
        <div className="bg-black rounded-lg overflow-hidden mb-12 aspect-video flex items-center justify-center border-2 border-[#E5C170]/30">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#E5C170] flex items-center justify-center mx-auto mb-4">
              <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#0B1426] ml-2"></div>
            </div>
            <p className="text-white text-xl font-semibold">Live Stream Player</p>
            <p className="text-gray-400 mt-2">YouTube, Facebook, or Custom Stream Integration</p>
          </div>
        </div>
        
        {/* Service Times */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8">
            <h3 className="font-serif text-2xl text-white mb-4">Sunday Services</h3>
            <ul className="text-gray-300 space-y-2">
              <li>🕘 9:00 AM - Morning Worship</li>
              <li>📖 Sermon & Prayer</li>
              <li>🕕 6:00 PM - Evening Service</li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8">
            <h3 className="font-serif text-2xl text-white mb-4">Weekday Services</h3>
            <ul className="text-gray-300 space-y-2">
              <li>📅 Wednesday 7:00 PM - Midweek Revival</li>
              <li>👨‍👩‍👧‍👦 Friday 7:00 PM - Youth Service</li>
              <li>🙏 Daily Prayer Hours Available</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}