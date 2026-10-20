import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'outline' | 'light' | 'champagne' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const baseStyles =
  'group/button inline-flex items-center justify-center gap-2 rounded-md font-sans font-medium transition-colors duration-300 ease-editorial disabled:cursor-not-allowed disabled:opacity-50'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950',
  champagne: 'bg-champagne text-navy-950 hover:bg-champagne-light active:bg-champagne-dark',
  outline: 'border border-navy-900/25 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white',
  light: 'border border-white/40 text-white hover:border-white hover:bg-white hover:text-navy-900',
  ghost: 'px-0 text-navy-900 hover:text-champagne',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'min-h-9 px-4 py-2 text-[13px]',
  md: 'min-h-11 px-5 py-2.5 text-sm',
  lg: 'min-h-12 px-7 py-3.5 text-[15px]',
}

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    /** Renders an internal router link. */
    to?: string
    /** Renders an external/anchor link. */
    href?: string
  }

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  to,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], variant === 'ghost' ? undefined : sizes[size], className)

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
