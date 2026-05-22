import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0B1426]">
      <Navbar />
      <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[#E5C170] mb-8 hover:text-white transition">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Contact Us</h1>
        <p className="text-gray-300 text-lg mb-12">We'd love to hear from you. Reach out with any questions or prayer requests.</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E5C170]/20 flex items-center justify-center">
                <Mail className="text-[#E5C170]" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a href="mailto:contact@jcm.com" className="text-white font-semibold hover:text-[#E5C170] transition">
                  contact@jcm.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E5C170]/20 flex items-center justify-center">
                <Phone className="text-[#E5C170]" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a href="tel:+1234567890" className="text-white font-semibold hover:text-[#E5C170] transition">
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E5C170]/20 flex items-center justify-center">
                <MapPin className="text-[#E5C170]" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-semibold">123 Faith Street,<br />Your City, ST 12345</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E5C170]/20 flex items-center justify-center">
                <Clock className="text-[#E5C170]" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Office Hours</p>
                <p className="text-white font-semibold">Mon-Fri: 9am - 5pm<br />Sun: After Service</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#E5C170]/10 to-transparent backdrop-blur border border-[#E5C170]/30 rounded-lg p-8">
          <h3 className="font-serif text-2xl text-white mb-4">🤝 Join Our Community</h3>
          <p className="text-gray-300 mb-6">Whether you're new to faith, seeking spiritual growth, or looking to serve, there's a place for you at Jesus Christ Ministries. We warmly invite you to:</p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-[#E5C170]">•</span>
              <span>Attend our Sunday worship services</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E5C170]">•</span>
              <span>Join our small groups and Bible studies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E5C170]">•</span>
              <span>Participate in volunteer opportunities</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E5C170]">•</span>
              <span>Experience the presence of God in worship</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}