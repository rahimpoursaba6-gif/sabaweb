import { useCallback, useEffect, useRef, useState } from 'react'
import type {
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  ReactNode,
} from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/cn'

type ScrollCarouselProps = {
  children: ReactNode
  label: string
  className?: string
}

/**
 * Native scroll-snap track with pointer dragging for desktop, touch swiping for
 * mobile, arrow buttons and keyboard support (the track itself is focusable, so
 * arrow keys scroll it). No carousel dependency.
 */
export function ScrollCarousel({ children, label, className }: ScrollCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 })
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const syncEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setAtStart(track.scrollLeft <= 4)
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    syncEdges()
    track.addEventListener('scroll', syncEdges, { passive: true })
    window.addEventListener('resize', syncEdges)

    return () => {
      track.removeEventListener('scroll', syncEdges)
      window.removeEventListener('resize', syncEdges)
    }
  }, [syncEdges])

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const step = Math.max(track.clientWidth * 0.75, 300)
    track.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track || event.pointerType === 'touch') return

    drag.current = { active: true, startX: event.clientX, startScroll: track.scrollLeft, moved: 0 }
    track.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track || !drag.current.active) return

    const delta = event.clientX - drag.current.startX
    drag.current.moved = Math.max(drag.current.moved, Math.abs(delta))
    track.style.scrollSnapType = 'none'
    track.scrollLeft = drag.current.startScroll - delta
  }

  const endDrag = () => {
    const track = trackRef.current
    if (!track || !drag.current.active) return
    drag.current.active = false
    track.style.scrollSnapType = ''
  }

  // A drag that ended on top of a card must not open it.
  const handleClickCapture = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (drag.current.moved > 8) {
      event.preventDefault()
      event.stopPropagation()
      drag.current.moved = 0
    }
  }

  const arrowClassName =
    'hidden h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/95 text-navy-900 shadow-[0_8px_24px_rgba(11,28,51,0.12)] backdrop-blur transition-all duration-300 hover:border-champagne hover:text-champagne disabled:cursor-not-allowed disabled:opacity-35 sm:inline-flex'

  return (
    <div className={cn('relative', className)}>
      <div
        ref={trackRef}
        role="group"
        aria-label={label}
        aria-roledescription="carousel"
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={handleClickCapture}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-1 [touch-action:pan-x_pan-y]"
      >
        {children}
      </div>

      <div className="pointer-events-none absolute -left-1 top-1/2 hidden -translate-y-1/2 sm:block">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          disabled={atStart}
          aria-label="Show previous properties"
          className={cn(arrowClassName, 'pointer-events-auto')}
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="pointer-events-none absolute -right-1 top-1/2 hidden -translate-y-1/2 sm:block">
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          disabled={atEnd}
          aria-label="Show more properties"
          className={cn(arrowClassName, 'pointer-events-auto')}
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

    </div>
  )
}
