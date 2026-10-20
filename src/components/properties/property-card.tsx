import { Link } from 'react-router-dom'

import { FavoriteButton } from '@/components/properties/favorite-button'
import { formatPrice } from '@/data/properties'
import type { Property } from '@/data/properties'
import { cn } from '@/lib/cn'
import { fa } from '@/lib/fa'

type PropertyCardProps = {
  property: Property
  /** `grid` adds the specification line used on the browse page. */
  variant?: 'featured' | 'grid'
  className?: string
  /** Skip lazy-loading for above-the-fold cards. */
  priority?: boolean
}

export function PropertyCard({ property, variant = 'grid', className, priority = false }: PropertyCardProps) {
  const href = `/properties/${property.slug}`

  return (
    <article
      className={cn(
        'group relative flex flex-col transition-transform duration-500 ease-editorial hover:-translate-y-1',
        className,
      )}
    >
      <Link
        to={href}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block overflow-hidden rounded-[10px] bg-mist"
      >
        <span className="block aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
          <img
            src={property.images[0]?.src}
            alt={property.images[0]?.alt ?? property.name}
            width={1200}
            height={1500}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="image-zoom h-full w-full object-cover"
          />
        </span>
        <span className="absolute start-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-[0.04em] text-navy-900 backdrop-blur">
          {property.type}
        </span>
      </Link>

      <FavoriteButton slug={property.slug} name={property.name} className="absolute end-3 top-3" />

      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="font-display text-[17px] font-medium leading-snug text-ink">
          <Link
            to={href}
            className="transition-colors duration-300 after:absolute after:inset-0 after:z-10 after:content-[''] hover:text-navy-700"
          >
            {property.name}
          </Link>
        </h3>
        <p className="mt-1.5 text-[13px] text-graphite/75">{property.location}</p>

        {variant === 'grid' ? (
          <p className="mt-3 text-[12.5px] text-graphite/65">
            {fa(property.beds)} خواب · {fa(property.baths)} حمام · {fa(property.sqft)} فوت مربع
          </p>
        ) : null}

        <p className="mt-auto pt-3 font-display text-[15px] font-medium text-navy-900">
          {formatPrice(property.price)}
        </p>
      </div>
    </article>
  )
}
