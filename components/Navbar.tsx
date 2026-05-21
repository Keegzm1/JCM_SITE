'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wide">
            JCM <span className="text-gold text-sm font-sans block font-normal">A Place Where Miracles Happen</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/about" className="hover:text-gold transition-colors">About Us</Link>
            <Link href="/sermons" className="hover:text-gold transition-colors">Sermons</Link>
            <Link href="/inspiration" className="hover:text-gold transition-colors">Inspiration</Link>
            <Link href="/live" className="text-navy bg-gold px-4 py-2 rounded-full font-semibold hover:bg-white transition-colors">
              Watch Live
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-navy border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className="block px-3 py-2 text-base font-medium hover:bg-gold hover:text-navy rounded-md">About Us</Link>
            <Link href="/sermons" className="block px-3 py-2 text-base font-medium hover:bg-gold hover:text-navy rounded-md">Sermons</Link>
            <Link href="/inspiration" className="block px-3 py-2 text-base font-medium hover:bg-gold hover:text-navy rounded-md">Inspiration</Link>
            <Link href="/live" className="block px-3 py-2 text-base font-medium text-gold font-bold">Watch Live</Link>
          </div>
        </div>
      )}
    </nav>
  );
}