'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { useApp } from '@/app/providers'
import { Search, Bookmark, Moon, Sun, ChevronRight } from 'lucide-react'

const BIBLE_BOOKS = ['Genesis', 'Exodus', 'Psalms', 'Matthew', 'John', 'Romans']
const VERSIONS = ['NIV', 'NKJV', 'AMP']

const MOCK_CHAPTER = [
  { id: 'jn-1-1', v: 1, NIV: "In the beginning was the Word, and the Word was with God, and the Word was God.", NKJV: "In the beginning was the Word, and the Word was with God, and the Word was God.", AMP: "In the beginning [before all time] was the Word (Christ), and the Word was with God, and the Word was God Himself." },
  { id: 'jn-1-2', v: 2, NIV: "He was with God in the beginning.", NKJV: "He was in the beginning with God.", AMP: "He was continually existing in the beginning with God." },
  { id: 'jn-1-3', v: 3, NIV: "Through him all things were made; without him nothing was made that has been made.", NKJV: "All things were made through Him, and without Him nothing was made that was made.", AMP: "All things were made and came into existence through Him; and without Him not even one thing was made that has come into being." }
]

export default function BiblePage() {
  const { theme, toggleTheme, favorites, toggleFavorite } = useApp()
  const [version, setVersion] = useState('NIV')
  const [activeBook, setActiveBook] = useState('John')
  const [searchQuery, setSearchQuery] = useState('')
  const [highlighted, setHighlighted] = useState<string[]>([])

  const toggleHighlight = (id: string) => {
    setHighlighted(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  return (
    <div className="min-h-screen transition-colors duration-200">
      <Navbar />
      
      <div className="sticky top-20 z-40 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center">
          
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <select 
              value={activeBook} 
              onChange={(e) => setActiveBook(e.target.value)}
              className="bg-cream dark:bg-slate-700 border-none rounded-xl px-4 py-2 font-medium"
            >
              {BIBLE_BOOKS.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            
            <div className="bg-cream dark:bg-slate-700 rounded-xl p-1 flex">
              {VERSIONS.map(v => (
                <button
                  key={v}
                  onClick={() => setVersion(v)}
                  className={`px-3 py-1 rounded-lg text-sm font-bold transition-all ${version === v ? 'bg-navy text-gold dark:bg-gold dark:text-navy' : 'text-gray-500'}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search scripture..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-cream dark:bg-slate-700 pl-9 pr-4 py-2 rounded-xl border-none focus:ring-2 focus:ring-gold text-sm"
              />
            </div>
            <button onClick={toggleTheme} className="p-2 bg-cream dark:bg-slate-700 rounded-xl">
              {theme === 'dark' ? <Sun className="text-gold w-5 h-5" /> : <Moon className="text-navy w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-gold tracking-wider uppercase">
          <span>{activeBook}</span> <ChevronRight className="w-4 h-4" /> <span>Chapter 1</span>
        </div>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed font-serif tracking-wide">
          {MOCK_CHAPTER.map((verse) => {
            const isFav = favorites.includes(verse.id)
            const isHigh = highlighted.includes(verse.id)
            return (
              <div 
                key={verse.id} 
                className={`group relative p-3 rounded-xl transition-all cursor-pointer ${isHigh ? 'bg-yellow-100/80 dark:bg-yellow-900/30 border-l-4 border-gold' : 'hover:bg-gray-50 dark:hover:bg-slate-800'}`}
                onClick={() => toggleHighlight(verse.id)}
              >
                <span className="font-sans text-xs font-bold text-gold mr-3 align-super select-none">{verse.v}</span>
                <span>{verse[version as keyof typeof verse]}</span>
                
                <div className="absolute right-2 top-2 hidden group-hover:flex items-center gap-1 bg-white dark:bg-slate-700 shadow-md rounded-lg border border-gray-100 p-1">
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(verse.id); }}
                    className={`p-1.5 rounded hover:bg-gray-100 dark:hover:bg-slate-600 ${isFav ? 'text-gold' : 'text-gray-400'}`}
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}