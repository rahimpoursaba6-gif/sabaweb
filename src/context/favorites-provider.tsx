import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

const STORAGE_KEY = 'horizon:favorites'

type FavoritesContextValue = {
  favorites: string[]
  count: number
  isFavorite: (slug: string) => boolean
  toggleFavorite: (slug: string) => void
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null)

function readStoredFavorites(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]')
    return Array.isArray(parsed) ? parsed.filter((value): value is string => typeof value === 'string') : []
  } catch {
    return []
  }
}

/** Saved properties persist in localStorage so the heart survives a reload. */
export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>(readStoredFavorites)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {
      // Storage can be unavailable (private mode) — saving is best-effort.
    }
  }, [favorites])

  const toggleFavorite = useCallback((slug: string) => {
    setFavorites((previous) =>
      previous.includes(slug) ? previous.filter((item) => item !== slug) : [...previous, slug],
    )
  }, [])

  const isFavorite = useCallback((slug: string) => favorites.includes(slug), [favorites])

  const value = useMemo<FavoritesContextValue>(
    () => ({ favorites, count: favorites.length, isFavorite, toggleFavorite }),
    [favorites, isFavorite, toggleFavorite],
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites(): FavoritesContextValue {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used inside a <FavoritesProvider>')
  }
  return context
}
