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
      setMessage('لطفاً یک ایمیل معتبر وارد کنید.')
      return
    }

    setStatus('success')
    setMessage('سپاسگزاریم — فهرست‌های تازه و یادداشت‌های بازار به صندوق شما می‌رسد.')
    setEmail('')
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-center">
      <div>
        <h2 className="font-display text-lg font-medium text-white">فهرست‌های تازه، پیش از همه</h2>
        <p className="mt-2 max-w-md text-sm leading-loose">
          ماهی یک ایمیل سنجیده: اقامتگاه‌های خارج از بازار، یادداشت‌های بازار و نه چیز دیگر.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="w-full">
        <label htmlFor="newsletter-email" className="sr-only">
          نشانی ایمیل
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
            عضویت
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
