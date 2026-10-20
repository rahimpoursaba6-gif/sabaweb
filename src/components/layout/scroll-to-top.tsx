import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll position when the route changes so every page starts at the top.
 * Hash links are left alone so in-page anchors keep working.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
