import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

type FieldOptions = {
  tone?: 'light' | 'dark'
  invalid?: boolean
  className?: string
}

/** Shared input styling so every form in the site matches. */
export function fieldClassName({ tone = 'light', invalid = false, className }: FieldOptions = {}): string {
  return cn(
    'w-full rounded-md border px-4 py-3 text-sm transition-colors duration-300 focus:outline-none',
    tone === 'dark'
      ? 'border-white/20 bg-white/[0.06] text-white placeholder:text-white/40 focus:border-champagne'
      : 'border-ink/15 bg-white text-ink placeholder:text-graphite/45 focus:border-navy-900',
    invalid && (tone === 'dark' ? 'border-champagne' : 'border-red-500/70'),
    className,
  )
}

type FieldProps = {
  id: string
  label: string
  children: ReactNode
  hint?: string
  className?: string
}

export function Field({ id, label, children, hint, className }: FieldProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-[11px] font-semibold uppercase tracking-label text-graphite/70">
        {label}
      </label>
      {children}
      {hint ? <p className="text-xs text-graphite/60">{hint}</p> : null}
    </div>
  )
}
