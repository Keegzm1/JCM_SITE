import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Play, Heart, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#0B1426]">
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        
        {/* Background Image with Gradients */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&w=2000&auto=format&fit=crop")',
          }}
        />
        {/* Gradient Overlays for readability and mood */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B1426]/90 via-[#0B1426]/70 to-[#0B1426]" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-12">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#E5C170]/50"></div>
            <span className="text-[#E5C170] uppercase tracking-[0.3em] text-xs font-semibold">Welcome Home</span>
            <div className="h-[1px] w-12 bg-[#E5C170]/50"></div>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl text-white mb-6 leading-tight">
            A Place Where <br/>
            <span className="text-[#E5C170] italic font-light tracking-wide pr-2">Miracles</span> Happen
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl leading-relaxed font-light">
            At Jesus Christ Ministries we gather to worship, encounter the presence of God, and watch lives transformed by His grace. Come as you are.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
            <Link href="/live" className="flex items-center justify-center gap-2 bg-[#E5C170] text-[#0B1426] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white transition-all transform hover:scale-105 min-w-[200px]">
              <Play size={18} /> Watch Live
            </Link>
            <Link href="/prayer" className="flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-white/10 transition-all min-w-[220px]">
              <Heart size={18} /> Submit Prayer Request
            </Link>
            <Link href="/inspiration" className="flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-white/10 transition-all min-w-[200px]">
              <Sparkles size={18} /> Daily Inspiration
            </Link>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>

      </section>
    </div>
  );
}