'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-navy text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gold">
          JCM
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <Link href="/inspiration" className="hover:text-gold transition">Inspiration</Link>
          <Link href="/live" className="hover:text-gold transition">Live</Link>
        </div>
      </div>
    </nav>
  )
}
