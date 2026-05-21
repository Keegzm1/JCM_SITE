'use client'
import { useState } from 'react';
import Navbar from '@/components/Navbar';

const INSPIRATION_DATA = {
  Anxiety: {
    scripture: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    reference: "Philippians 4:6",
    prayer: "Lord, I give you my heavy heart. Replace my anxiety with your peace that surpasses all understanding. Guide my steps and calm my mind.",
    encouragement: "God is in control. Breathe deep and trust that He is working all things for your good."
  },
  Healing: {
    scripture: "Heal me, Lord, and I will be healed; save me and I will be saved, for you are the one I praise.",
    reference: "Jeremiah 17:14",
    prayer: "Heavenly Father, I ask for your healing touch. Restore my body, mind, and spirit according to your perfect will.",
    encouragement: "By His stripes, we are healed. Stand firm in faith and trust in His miraculous power."
  },
  Finances: {
    scripture: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
    reference: "Philippians 4:19",
    prayer: "Lord, I trust you as my provider. Grant me wisdom to manage what I have and faith to trust you for what I need.",
    encouragement: "Your provision comes from the Lord. He sees your needs and will provide in His perfect timing."
  }
};

type Category = keyof typeof INSPIRATION_DATA;
const categories: Category[] = ['Anxiety', 'Healing', 'Finances'];

export default function InspirationHub() {
  const [selected, setSelected] = useState<Category>('Anxiety');

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-navy font-bold mb-4">Inspiration Hub</h1>
          <p className="text-gray-600 text-lg">What are you seeking guidance for today?</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selected === cat 
                  ? 'bg-navy text-gold shadow-md' 
                  : 'bg-white text-charcoal border border-gray-200 hover:border-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="mb-8">
            <h3 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">The Word</h3>
            <blockquote className="font-serif text-2xl md:text-3xl text-navy leading-relaxed mb-4">
              "{INSPIRATION_DATA[selected].scripture}"
            </blockquote>
            <p className="text-gray-500 font-medium">— {INSPIRATION_DATA[selected].reference}</p>
          </div>

          <hr className="border-gray-100 my-8" />

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Prayer</h3>
              <p className="text-charcoal leading-relaxed">
                {INSPIRATION_DATA[selected].prayer}
              </p>
            </div>
            <div>
              <h3 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Encouragement</h3>
              <p className="text-charcoal leading-relaxed">
                {INSPIRATION_DATA[selected].encouragement}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}