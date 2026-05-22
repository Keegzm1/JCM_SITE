'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface AppContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  favorites: string[]
  toggleFavorite: (id: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProviders({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    )
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme, favorites, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within AppProviders')
  }
  return context
}
