import type { FormEvent } from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { fieldClassName } from '@/components/ui/field'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = email.trim()

    if (!EMAIL_PATTERN.test(value)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('success')
    setMessage('Thank you — new listings and market notes will arrive in your inbox.')
    setEmail('')
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-center">
      <div>
        <h2 className="font-display text-lg font-medium text-white">New listings, first</h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed">
          One considered email a month: off-market residences, market notes and nothing else.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="w-full">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            aria-invalid={status === 'error'}
            className={fieldClassName({
              tone: 'dark',
              invalid: status === 'error',
            })}
          />
          <Button type="submit" variant="champagne" className="shrink-0">
            Subscribe
          </Button>
        </div>
        <p
          role="status"
          aria-live="polite"
          className={
            status === 'error'
              ? 'mt-3 text-xs text-champagne-light'
              : 'mt-3 text-xs text-white/60'
          }
        >
          {message}
        </p>
      </form>
    </div>
  )
}
