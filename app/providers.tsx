'use client'
import { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

interface AppContextType {
  theme: Theme
  toggleTheme: () => void
  favorites: string[]
  toggleFavorite: (verseId: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    const savedTheme = localStorage.getItem('jcm-theme') as Theme
    const savedFavs = localStorage.getItem('jcm-favorites')
    if (savedTheme) setTheme(savedTheme)
    if (savedFavs) setFavorites(JSON.parse(savedFavs))
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    localStorage.setItem('jcm-theme', nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  }

  const toggleFavorite = (verseId: string) => {
    const updated = favorites.includes(verseId)
      ? favorites.filter(id => id !== verseId)
      : [...favorites, verseId]
    setFavorites(updated)
    localStorage.setItem('jcm-favorites', JSON.stringify(updated))
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme, favorites, toggleFavorite }}>
      <div className={theme === 'dark' ? 'dark bg-slate-900 text-white' : 'bg-cream text-charcoal'}>
        {children}
      </div>
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProviders')
  return context
}