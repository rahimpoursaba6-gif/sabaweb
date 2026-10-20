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
    message: propertyName ? `I would like more information about ${propertyName}.` : '',
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [isSent, setIsSent] = useState(false)

  const update = (key: keyof typeof values) => (event: { target: { value: string } }) => {
    setValues((previous) => ({ ...previous, [key]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: FieldErrors = {}
    if (values.name.trim().length < 2) nextErrors.name = 'Please tell us your name.'
    if (!EMAIL_PATTERN.test(values.email.trim())) nextErrors.email = 'Please enter a valid email address.'
    if (values.message.trim().length < 10) nextErrors.message = 'A short note helps us prepare — 10 characters minimum.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setIsSent(true)
  }

  const heading =
    title ?? (intent === 'viewing' ? 'Request a viewing' : propertyName ? 'Ask about this property' : 'Send us a message')

  if (isSent) {
    return (
      <div role="status" className="rounded-[12px] border border-champagne/40 bg-ivory p-8 text-center">
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-champagne text-white">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-display text-xl font-medium text-ink">Thank you, {values.name.split(' ')[0]}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-graphite/85">
          {intent === 'viewing'
            ? 'Your viewing request is with the advisor for this residence. They will confirm a time within one business day.'
            : 'Your message has reached the Horizon team. An advisor will reply within one business day.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[12px] border border-ink/10 bg-white p-6 sm:p-8">
      <h2 className="font-display text-xl font-medium text-ink">{heading}</h2>
      {description ? <p className="mt-2 text-sm leading-relaxed text-graphite/80">{description}</p> : null}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field id="inquiry-name" label="Full name">
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

        <Field id="inquiry-email" label="Email">
          <input
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
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

        <Field id="inquiry-phone" label="Phone (optional)" className="sm:col-span-2">
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

        <Field id="inquiry-message" label="Message" className="sm:col-span-2">
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
        <Send className="h-4 w-4" aria-hidden="true" />
        {intent === 'viewing' ? 'Request viewing' : 'Send message'}
      </Button>
      <p className="mt-4 text-xs text-graphite/60">
        We reply within one business day. Your details are never shared with third parties.
      </p>
    </form>
  )
}
