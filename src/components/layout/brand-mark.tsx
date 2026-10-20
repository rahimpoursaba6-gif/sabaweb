import { cn } from '@/lib/cn'

type BrandMarkProps = {
  /** `light` for dark surfaces, `dark` for light surfaces. */
  tone?: 'light' | 'dark'
  className?: string
}

export function BrandMark({ tone = 'light', className }: BrandMarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true" focusable="false">
        <path
          d="M4 23.4V12.6L16 6l12 6.6v10.8"
          fill="none"
          stroke="#C5A059"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M11.4 23.4v-6.2h9.2v6.2"
          fill="none"
          stroke="#C5A059"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M16 6v4.2" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[16px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300',
            tone === 'light' ? 'text-white' : 'text-navy-900',
          )}
        >
          Horizon
        </span>
        <span className="mt-1 text-[8.5px] font-semibold uppercase tracking-[0.42em] text-champagne">
          Properties
        </span>
      </span>
    </span>
  )
}
