import type { FormEvent } from 'react'
import { useState } from 'react'
import { Check, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Field, fieldClassName } from '@/components/ui/field'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type InquiryFormProps = {
  /** Pre-fills the message and labels the form when sent from a property page. */
  propertyName?: string
  title?: string
  description?: string
  intent?: 'enquiry' | 'viewing'
}

type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>

export function InquiryForm({ propertyName, title, description, intent = 'enquiry' }: InquiryFormProps) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: propertyName ? `درباره ${propertyName} اطلاعات بیشتری می‌خواهم.` : '',
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [isSent, setIsSent] = useState(false)

  const update = (key: keyof typeof values) => (event: { target: { value: string } }) => {
    setValues((previous) => ({ ...previous, [key]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: FieldErrors = {}
    if (values.name.trim().length < 2) nextErrors.name = 'لطفاً نام خود را بنویسید.'
    if (!EMAIL_PATTERN.test(values.email.trim())) nextErrors.email = 'لطفاً یک ایمیل معتبر وارد کنید.'
    if (values.message.trim().length < 10) nextErrors.message = 'یادداشت کوتاهی به ما کمک می‌کند آماده شویم — حداقل ۱۰ نویسه.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setIsSent(true)
  }

  const heading =
    title ?? (intent === 'viewing' ? 'درخواست بازدید' : propertyName ? 'پرسش درباره این ملک' : 'برای ما پیام بفرستید')

  if (isSent) {
    return (
      <div role="status" className="rounded-[12px] border border-champagne/40 bg-ivory p-8 text-center">
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-champagne text-white">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-display text-xl font-medium text-ink">سپاسگزاریم، {values.name.split(' ')[0]}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-loose text-graphite/85">
          {intent === 'viewing'
            ? 'درخواست بازدید شما نزد مشاور این اقامتگاه است. او زمان را در یک روز کاری تأیید می‌کند.'
            : 'پیام شما به تیم هورایزن رسید. یکی از مشاوران در یک روز کاری پاسخ می‌دهد.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[12px] border border-ink/10 bg-white p-6 sm:p-8">
      <h2 className="font-display text-xl font-medium text-ink">{heading}</h2>
      {description ? <p className="mt-2 text-sm leading-loose text-graphite/80">{description}</p> : null}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field id="inquiry-name" label="نام و نام خانوادگی">
          <input
            id="inquiry-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'inquiry-name-error' : undefined}
            className={fieldClassName({ invalid: Boolean(errors.name) })}
          />
          {errors.name ? (
            <p id="inquiry-name-error" className="text-xs text-red-600">
              {errors.name}
            </p>
          ) : null}
        </Field>

        <Field id="inquiry-email" label="ایمیل">
          <input
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'inquiry-email-error' : undefined}
            className={fieldClassName({ invalid: Boolean(errors.email) })}
          />
          {errors.email ? (
            <p id="inquiry-email-error" className="text-xs text-red-600">
              {errors.email}
            </p>
          ) : null}
        </Field>

        <Field id="inquiry-phone" label="تلفن (اختیاری)" className="sm:col-span-2">
          <input
            id="inquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update('phone')}
            className={fieldClassName()}
          />
        </Field>

        <Field id="inquiry-message" label="پیام" className="sm:col-span-2">
          <textarea
            id="inquiry-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={update('message')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'inquiry-message-error' : undefined}
            className={fieldClassName({ className: 'resize-y' })}
          />
          {errors.message ? (
            <p id="inquiry-message-error" className="text-xs text-red-600">
              {errors.message}
            </p>
          ) : null}
        </Field>
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
        <Send className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
        {intent === 'viewing' ? 'درخواست بازدید' : 'ارسال پیام'}
      </Button>
      <p className="mt-4 text-xs leading-relaxed text-graphite/60">
        در یک روز کاری پاسخ می‌دهیم. اطلاعات شما هرگز با اشخاص ثالث به اشتراک گذاشته نمی‌شود.
      </p>
    </form>
  )
}
