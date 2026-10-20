import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  label?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl', className)}>
      {label ? <p className="eyebrow">{label}</p> : null}
      <h2 className={cn('display-lg mt-4', titleClassName)}>{title}</h2>
      {description ? <p className="body-lg mt-5 text-graphite/85">{description}</p> : null}
    </div>
  )
}
