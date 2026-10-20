import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/cn'

export type Crumb = { label: string; to?: string }

type PageHeroProps = {
  label: string
  title: ReactNode
  description?: ReactNode
  image?: string
  crumbs?: Crumb[]
  children?: ReactNode
}

/** Dark band every inner page opens with, so the transparent header reads correctly. */
export function PageHero({ label, title, description, image, crumbs, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-36 text-white lg:pb-20 lg:pt-44">
      {image ? (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          width={1400}
          height={1000}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />
      ) : null}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/70 to-navy-950/95"
      />

      <div className="shell relative">
        {crumbs && crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium uppercase tracking-label text-white/50">
              {crumbs.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                  {crumb.to ? (
                    <Link to={crumb.to} className="transition-colors duration-300 hover:text-champagne">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{crumb.label}</span>
                  )}
                  {index < crumbs.length - 1 ? (
                    <ChevronRight className="h-3 w-3 text-white/30" aria-hidden="true" />
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <p className="eyebrow text-champagne-light">{label}</p>
        <h1
          className={cn(
            'mt-4 max-w-4xl font-display text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.1] tracking-[-0.02em] text-white',
          )}
        >
          {title}
        </h1>
        {description ? <div className="mt-6 max-w-2xl text-[15px] leading-[1.75] text-white/70">{description}</div> : null}
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  )
}
