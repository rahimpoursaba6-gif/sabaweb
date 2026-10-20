import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

import { BrandMark } from '@/components/layout/brand-mark'
import { Button } from '@/components/ui/button'
import { CONTACT, NAV_LINKS } from '@/data/site'
import { cn } from '@/lib/cn'

/**
 * Transparent while a dark page band sits behind it, then settles into a light
 * sticky bar once the page scrolls. Every route opens with a dark band so the
 * transparent state is never unreadable.
 */
export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const isOverlay = !isScrolled && !isMenuOpen
  const onDark = isOverlay || isMenuOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,padding,box-shadow] duration-500 ease-editorial',
        isMenuOpen
          ? 'bg-navy-950 py-4'
          : isOverlay
            ? 'bg-transparent py-5'
            : 'bg-white/95 py-3 shadow-[0_1px_0_rgba(11,28,51,0.08)] backdrop-blur-md',
      )}
    >
      <div className="shell flex items-center justify-between gap-4">
        <Link
          to="/"
          className="shrink-0"
          aria-label="Horizon Properties — home"
          onClick={() => setIsMenuOpen(false)}
        >
          <BrandMark tone={onDark ? 'light' : 'dark'} />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative inline-block py-1 text-[13.5px] font-medium transition-colors duration-300',
                      'after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-champagne after:transition-[width] after:duration-300 after:ease-editorial',
                      onDark
                        ? cn('text-white/80 hover:text-white', isActive && 'text-white')
                        : cn('text-navy-900/75 hover:text-navy-900', isActive && 'text-navy-900'),
                      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={CONTACT.phoneHref}
            variant={onDark ? 'light' : 'outline'}
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {CONTACT.phoneLabel}
          </Button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors duration-300 lg:hidden',
              onDark
                ? 'border-white/30 text-white hover:bg-white/10'
                : 'border-navy-900/20 text-navy-900 hover:bg-navy-900/5',
            )}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={cn(
          'overflow-hidden transition-[max-height,opacity] duration-500 ease-editorial lg:hidden',
          isMenuOpen ? 'max-h-[34rem] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="shell pt-6">
          <ul className="flex flex-col border-t border-white/10">
            {NAV_LINKS.map((link) => (
              <li key={link.to} className="border-b border-white/10">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block py-3.5 font-display text-lg transition-colors',
                      isActive ? 'text-champagne' : 'text-white/90 hover:text-white',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button href={CONTACT.phoneHref} variant="light" className="my-7 w-full">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {CONTACT.phoneLabel}
          </Button>
        </div>
      </div>
    </header>
  )
}
