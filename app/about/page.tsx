import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ArrowLeft, Heart, Users, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0B1426]">
      <Navbar />
      <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[#E5C170] mb-8 hover:text-white transition">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">About Us</h1>
        
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8 mb-12">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Jesus Christ Ministries is a vibrant faith community dedicated to worship, spiritual growth, and serving others in the love of Christ. Our mission is to help people encounter the living God and experience transformation through the Gospel.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed">
            For over a decade, we have been committed to creating a welcoming environment where all are invited to explore faith, grow spiritually, and discover their purpose in God's plan.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8 text-center">
            <Heart className="w-12 h-12 text-[#E5C170] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-white mb-3">Our Mission</h3>
            <p className="text-gray-300">To lead people into authentic worship, spiritual growth, and service in the name of Jesus Christ.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8 text-center">
            <Users className="w-12 h-12 text-[#E5C170] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-white mb-3">Our Community</h3>
            <p className="text-gray-300">A diverse family united by faith, supporting one another in our spiritual journey and daily lives.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8 text-center">
            <BookOpen className="w-12 h-12 text-[#E5C170] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-white mb-3">Our Foundation</h3>
            <p className="text-gray-300">Grounded in Scripture, guided by the Holy Spirit, and focused on the person of Jesus Christ.</p>
          </div>
        </div>
        
        <h2 className="font-serif text-3xl text-white mb-6">Core Values</h2>
        <ul className="space-y-4 mb-12">
          <li className="flex gap-4 text-gray-200">
            <span className="text-[#E5C170] font-bold">✓</span>
            <span><strong>Worship:</strong> We gather to encounter God and respond in praise and adoration.</span>
          </li>
          <li className="flex gap-4 text-gray-200">
            <span className="text-[#E5C170] font-bold">✓</span>
            <span><strong>Growth:</strong> We are committed to spiritual maturity and discipleship.</span>
          </li>
          <li className="flex gap-4 text-gray-200">
            <span className="text-[#E5C170] font-bold">✓</span>
            <span><strong>Community:</strong> We believe in authentic relationships and mutual support.</span>
          </li>
          <li className="flex gap-4 text-gray-200">
            <span className="text-[#E5C170] font-bold">✓</span>
            <span><strong>Service:</strong> We serve others with compassion and the love of Christ.</span>
          </li>
          <li className="flex gap-4 text-gray-200">
            <span className="text-[#E5C170] font-bold">✓</span>
            <span><strong>Transformation:</strong> We believe in the power of God to change lives.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}