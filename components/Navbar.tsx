'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navigation links using # for scrolling
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Mission', href: '#mission' },
    { name: 'Inspiration', href: '/inspiration' }, // Keep separate if highly interactive
    { name: 'Live', href: '/live' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1426]/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        <Link href="#home" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full bg-[#E5C170] flex items-center justify-center text-[#0B1426] font-serif text-xl group-hover:scale-105 transition-transform">
            ✝
          </div>
          <div>
            <h1 className="font-serif text-xl font-semibold text-white tracking-wide">Jesus Christ Ministries</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#E5C170] font-medium mt-0.5">A Place Where Miracles Happen</p>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium text-gray-200 hover:text-[#E5C170] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
