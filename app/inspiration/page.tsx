'use client'

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useState } from 'react';

const devotionals = [
  {
    date: 'Today',
    title: 'Faith in Times of Uncertainty',
    scripture: '2 Corinthians 5:7',
    text: '"For we live by faith, not by sight." Sometimes life feels uncertain and our circumstances challenge our trust in God. Yet God invites us to walk by faith, trusting in His promises even when we cannot see the outcome. What area of your life needs more faith today?',
    reflection: 'Take a moment to write down one area where God is asking you to trust Him more deeply. Commit it to prayer.',
  },
  {
    date: 'Yesterday',
    title: 'The Strength of God',
    scripture: 'Isaiah 40:31',
    text: '"But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." When we feel exhausted, God offers renewal. His strength is infinite and always available to those who trust in Him.',
    reflection: 'Reflect on how God has renewed your strength in the past. Thank Him for His faithfulness.',
  },
  {
    date: '2 Days Ago',
    title: 'Love Never Fails',
    scripture: '1 Corinthians 13:8',
    text: '"Love never fails." In a world where many things disappoint us, love stands as the ultimate truth. God\'s love for us is unconditional, eternal, and unchanging. This love should flow through us to others.',
    reflection: 'Who in your life needs to experience God\'s love through you today?',
  },
];

export default function Inspiration() {
  const [selectedDevotional, setSelectedDevotional] = useState(0);
  const devotional = devotionals[selectedDevotional];

  return (
    <div className="min-h-screen bg-[#0B1426]">
      <Navbar />
      <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[#E5C170] mb-8 hover:text-white transition">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Daily Inspiration</h1>
        <p className="text-gray-300 text-lg mb-12">Start your day with Scripture and meditation on God's Word.</p>
        
        {/* Current Devotional */}
        <div className="bg-gradient-to-br from-[#E5C170]/10 to-transparent backdrop-blur border border-[#E5C170]/30 rounded-lg p-12 mb-12">
          <div className="flex items-center gap-3 text-[#E5C170] mb-4">
            <BookOpen size={24} />
            <span className="text-sm font-semibold uppercase tracking-wider">{devotional.date}</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">{devotional.title}</h2>
          
          <p className="text-[#E5C170] font-semibold mb-6 italic text-lg">{devotional.scripture}</p>
          
          <p className="text-gray-200 leading-relaxed mb-8 text-lg">{devotional.text}</p>
          
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h4 className="text-white font-semibold mb-3">💭 Reflection</h4>
            <p className="text-gray-300">{devotional.reflection}</p>
          </div>
        </div>
        
        {/* Devotional History */}
        <h3 className="font-serif text-2xl text-white mb-6">Recent Devotionals</h3>
        <div className="grid gap-4">
          {devotionals.map((dev, index) => (
            <button
              key={index}
              onClick={() => setSelectedDevotional(index)}
              className={`text-left p-6 rounded-lg border transition-all ${
                selectedDevotional === index
                  ? 'bg-[#E5C170]/20 border-[#E5C170]'
                  : 'bg-white/5 border-white/10 hover:border-[#E5C170]/50'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[#E5C170] text-sm font-semibold uppercase">{dev.date}</p>
                  <h4 className="text-white font-serif text-xl mt-2">{dev.title}</h4>
                  <p className="text-gray-400 text-sm mt-1 italic">{dev.scripture}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}