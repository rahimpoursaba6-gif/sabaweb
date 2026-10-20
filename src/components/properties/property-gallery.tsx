import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { createPortal } from 'react-dom'

import { cn } from '@/lib/cn'

type GalleryImage = { src: string; alt: string }

type PropertyGalleryProps = {
  images: GalleryImage[]
  name: string
}

/**
 * Gallery with thumbnail navigation and a full-screen viewer (arrow keys,
 * Escape, backdrop click). Only the main image is eager-loaded.
 */
export function PropertyGallery({ images, name }: PropertyGalleryProps) {
  const total = images.length
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const openButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const step = useCallback(
    (delta: number) => {
      setIndex((previous) => (previous + delta + total) % total)
    },
    [total],
  )

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      openButtonRef.current?.focus()
    }
  }, [isOpen, step])

  const active = images[index] ?? images[0]!

  const navButtonClassName =
    'inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-navy-950/45 text-white backdrop-blur transition-colors duration-300 hover:bg-navy-950/80'

  return (
    <div>
      <div className="relative overflow-hidden rounded-[12px] bg-mist">
        <img
          src={active.src}
          alt={active.alt}
          width={1400}
          height={880}
          decoding="async"
          className="aspect-[4/3] w-full object-cover sm:aspect-[16/10] lg:aspect-[16/9]"
        />

        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:bottom-5">
          <span className="rounded-full bg-navy-950/55 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-white backdrop-blur">
            {index + 1} / {total}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Show previous photo"
              className={navButtonClassName}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Show next photo"
              className={navButtonClassName}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              ref={openButtonRef}
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/40 bg-navy-950/45 px-4 text-[13px] font-medium text-white backdrop-blur transition-colors duration-300 hover:bg-navy-950/80"
            >
              <Expand className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">View all photos</span>
              <span className="sm:hidden">Photos</span>
            </button>
          </div>
        </div>
      </div>

      <ul className="no-scrollbar mt-3 flex w-full min-w-0 max-w-full list-none gap-3 overflow-x-auto pb-1">
        {images.map((image, imageIndex) => (
          <li key={image.src} className="shrink-0">
            <button
              type="button"
              onClick={() => setIndex(imageIndex)}
              aria-label={`Show photo ${imageIndex + 1}: ${image.alt}`}
              aria-current={imageIndex === index}
              className={cn(
                'block h-16 w-24 overflow-hidden rounded-md border-2 transition-all duration-300 sm:h-20 sm:w-28',
                imageIndex === index
                  ? 'border-champagne opacity-100'
                  : 'border-transparent opacity-70 hover:opacity-100',
              )}
            >
              <img src={image.src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </button>
          </li>
        ))}
      </ul>

      {isOpen
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${name} photo viewer`}
              className="fixed inset-0 z-[90] flex flex-col bg-navy-950/97 p-4 sm:p-6"
            >
              <div className="flex items-center justify-between gap-4 text-white">
                <p className="text-sm">
                  <span className="font-medium">{name}</span>
                  <span className="ml-3 text-white/60">
                    {index + 1} / {total}
                  </span>
                </p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close photo viewer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:bg-white/10"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="relative mt-4 flex flex-1 items-center justify-center">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Show previous photo"
                  className="absolute left-0 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white/10"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>
                <img
                  src={active.src}
                  alt={active.alt}
                  className="max-h-full w-auto max-w-[min(100%,1400px)] rounded-lg object-contain"
                />
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Show next photo"
                  className="absolute right-0 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white/10"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <ul className="no-scrollbar mx-auto mt-5 flex max-w-full list-none gap-2.5 overflow-x-auto">
                {images.map((image, imageIndex) => (
                  <li key={image.src} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setIndex(imageIndex)}
                      aria-label={`Show photo ${imageIndex + 1}`}
                      aria-current={imageIndex === index}
                      className={cn(
                        'block h-14 w-20 overflow-hidden rounded border-2 transition-opacity duration-300',
                        imageIndex === index ? 'border-champagne opacity-100' : 'border-transparent opacity-55 hover:opacity-90',
                      )}
                    >
                      <img src={image.src} alt="" loading="lazy" className="h-full w-full object-cover" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>,
            document.body,
          )
        : null}
    </div>
  )
}
