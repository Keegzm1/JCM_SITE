import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { PlayCircle, Heart, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      <section className="relative h-[90vh] flex items-center justify-center bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome Home to <br/><span className="text-gold">Jesus Christ Ministries</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-gray-200">
            A Place Where Miracles Happen. Join us in faith, worship, and community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/live" className="flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105">
              <PlayCircle size={24} /> Watch Live
            </Link>
            <Link href="/prayer" className="flex items-center justify-center gap-2 bg-transparent border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              <Heart size={24} /> Prayer Request
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-serif text-2xl font-bold mb-4 text-navy">Sunday Service</h3>
            <p className="text-gray-600 mb-2">9:00 AM - Morning Worship</p>
            <p className="text-gray-600">6:00 PM - Evening Service</p>
          </div>
          <div className="bg-navy text-white p-8 rounded-2xl shadow-md">
            <BookOpen className="w-12 h-12 mx-auto text-gold mb-4" />
            <h3 className="font-serif text-2xl font-bold mb-4">Daily Inspiration</h3>
            <p className="mb-6 text-gray-300">Start your day with the Word of God.</p>
            <Link href="/inspiration" className="text-gold font-semibold hover:underline">Read Today's Devotional &rarr;</Link>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-serif text-2xl font-bold mb-4 text-navy">Midweek Revival</h3>
            <p className="text-gray-600 mb-2">Wednesday 7:00 PM</p>
            <p className="text-gray-600">Friday 7:00 PM (Youth)</p>
          </div>
        </div>
      </section>
    </div>
  );
}