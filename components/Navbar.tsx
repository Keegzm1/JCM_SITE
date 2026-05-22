'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle background when scrolling down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1426]/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full bg-[#E5C170] flex items-center justify-center text-[#0B1426] font-serif text-xl group-hover:scale-105 transition-transform">
            ✝
          </div>
          <div>
            <h1 className="font-serif text-xl font-semibold text-white tracking-wide">Jesus Christ Ministries</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#E5C170] font-medium mt-0.5">A Place Where Miracles Happen</p>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {['Home', 'About', 'Mission', 'Sermons', 'Inspiration', 'Bible', 'Events', 'Live', 'Prayer', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className="text-sm font-medium text-gray-200 hover:text-[#E5C170] transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link href="/live" className="flex items-center gap-2 text-[#0B1426] bg-[#E5C170] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white transition-all transform hover:scale-105">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> Watch Live
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0B1426]/95 backdrop-blur-xl border-t border-white/10 py-4">
          <div className="flex flex-col px-6 space-y-4">
             {['Home', 'About', 'Mission', 'Sermons', 'Inspiration', 'Bible', 'Events', 'Live', 'Prayer', 'Contact'].map((item) => (
              <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-200 hover:text-[#E5C170] font-medium">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}