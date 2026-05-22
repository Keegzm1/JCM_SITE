'use client'

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ArrowLeft, Send } from 'lucide-react';
import { useState } from 'react';

export default function Prayer() {
  const [formData, setFormData] = useState({ name: '', email: '', request: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - can integrate with email service
    alert(`Thank you ${formData.name}, your prayer request has been received.`);
    setFormData({ name: '', email: '', request: '' });
  };

  return (
    <div className="min-h-screen bg-[#0B1426]">
      <Navbar />
      <section className="pt-32 pb-20 px-4 max-w-2xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[#E5C170] mb-8 hover:text-white transition">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Prayer Requests</h1>
        <p className="text-gray-300 text-lg mb-12">Submit your prayer requests and our prayer team will intercede on your behalf. In Jesus' name, we believe for miracles!</p>
        
        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#E5C170]"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label className="block text-white font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#E5C170]"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-white font-medium mb-2">Prayer Request</label>
            <textarea
              name="request"
              value={formData.request}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#E5C170] resize-none"
              placeholder="Share your prayer request here..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#E5C170] text-[#0B1426] px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white transition-all transform hover:scale-105"
          >
            <Send size={18} /> Submit Prayer Request
          </button>
        </form>
        
        <div className="mt-12 bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8">
          <h3 className="font-serif text-2xl text-white mb-4">🙏 We Believe in the Power of Prayer</h3>
          <p className="text-gray-300">"Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours." - Mark 11:24</p>
        </div>
      </section>
    </div>
  );
}