import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Play, Heart, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="font-sans bg-[#0B1426]">
      <Navbar />
      
      {/* SECTION 1: HOME */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat fixed"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&w=2000&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B1426]/90 via-[#0B1426]/70 to-[#0B1426]" />
        
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
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
            <Link href="/live" className="flex items-center justify-center gap-2 bg-[#E5C170] text-[#0B1426] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white transition-all transform hover:scale-105 min-w-[200px]">
              <Play size={18} /> Watch Live
            </Link>
            <Link href="/prayer" className="flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-white/10 transition-all min-w-[220px]">
              <Heart size={18} /> Submit Prayer Request
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT US */}
      <section id="about" className="relative min-h-screen flex items-center justify-center bg-[#0B1426] text-white py-20 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl text-[#E5C170] mb-8">Our Story</h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Founded on the unwavering belief that God still performs miracles today, Jesus Christ Ministries is a beacon of hope in our community. We are more than a church; we are a family dedicated to faith, healing, and structural restoration of the spirit.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-16">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition">
              <h3 className="font-serif text-2xl text-[#E5C170] mb-4">Worship</h3>
              <p className="text-gray-400">Experience atmosphere-shifting praise that breaks chains and uplifts the soul.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition">
              <h3 className="font-serif text-2xl text-[#E5C170] mb-4">Word</h3>
              <p className="text-gray-400">Uncompromising, truth-driven teaching from the scriptures that equips you for life.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition">
              <h3 className="font-serif text-2xl text-[#E5C170] mb-4">Community</h3>
              <p className="text-gray-400">Find your tribe. Build lasting relationships with believers walking the same path.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center bg-white text-[#0B1426] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 text-[#D4AF37] mx-auto mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8">Our Mission</h2>
          <p className="text-2xl text-gray-700 leading-relaxed font-serif italic">
            "To reach the lost, heal the broken, and raise up a generation of believers empowered by the Holy Spirit to transform the world."
          </p>
        </div>
      </section>

    </div>
  );
}
