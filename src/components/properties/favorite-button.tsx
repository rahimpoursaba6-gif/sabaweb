import { Heart } from 'lucide-react'

import { useFavorites } from '@/context/favorites-provider'
import { cn } from '@/lib/cn'

type FavoriteButtonProps = {
  slug: string
  name: string
  className?: string
  size?: 'sm' | 'md'
}

/** Save / unsave a property. Persists to localStorage through FavoritesProvider. */
export function FavoriteButton({ slug, name, className, size = 'md' }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const isSaved = isFavorite(slug)

  return (
    <button
      type="button"
      aria-pressed={isSaved}
      aria-label={isSaved ? `حذف ${name} از املاک ذخیره‌شده` : `ذخیره ${name} در املاک ذخیره‌شده`}
      title={isSaved ? 'حذف از ذخیره‌شده‌ها' : 'ذخیره ملک'}
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        toggleFavorite(slug)
      }}
      className={cn(
        'inline-flex items-center justify-center rounded-full border backdrop-blur transition-colors duration-300',
        size === 'sm' ? 'h-8 w-8' : 'h-10 w-10',
        isSaved
          ? 'border-champagne bg-champagne text-white'
          : 'border-white/50 bg-white/85 text-navy-900 hover:border-champagne hover:text-champagne',
        className,
      )}
    >
      <Heart className={cn(size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4', isSaved && 'fill-current')} aria-hidden="true" />
    </button>
  )
}
