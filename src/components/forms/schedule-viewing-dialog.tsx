import type { FormEvent } from 'react'
import { useState } from 'react'
import { CalendarDays, Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { Field, fieldClassName } from '@/components/ui/field'
import { cn } from '@/lib/cn'
import { faDate } from '@/lib/fa'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const TIME_SLOTS = ['۰۹:۳۰', '۱۱:۰۰', '۱۳:۳۰', '۱۵:۰۰', '۱۶:۳۰'] as const

type ScheduleViewingDialogProps = {
  propertyName: string
  label?: string
  className?: string
  variant?: 'primary' | 'outline' | 'light'
}

export function ScheduleViewingDialog({
  propertyName,
  label = 'رزرو بازدید',
  className,
  variant = 'outline',
}: ScheduleViewingDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [values, setValues] = useState({
    name: '',
    email: '',
    date: '',
    time: TIME_SLOTS[0] as string,
    notes: '',
  })
  const [errors, setErrors] = useState<{ name?: string; email?: string; date?: string }>({})

  const today = new Date().toISOString().slice(0, 10)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: { name?: string; email?: string; date?: string } = {}
    if (values.name.trim().length < 2) nextErrors.name = 'لطفاً نام خود را بنویسید.'
    if (!EMAIL_PATTERN.test(values.email.trim())) nextErrors.email = 'لطفاً یک ایمیل معتبر وارد کنید.'
    if (!values.date) nextErrors.date = 'روز مورد نظرتان را انتخاب کنید.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setIsSent(true)
  }

  const close = () => {
    setIsOpen(false)
    window.setTimeout(() => setIsSent(false), 300)
  }

  return (
    <>
      <Button variant={variant} onClick={() => setIsOpen(true)} className={className}>
        <CalendarDays className="h-4 w-4" aria-hidden="true" />
        {label}
      </Button>

      <Dialog
        open={isOpen}
        onClose={close}
        title={isSent ? 'بازدید درخواست شد' : 'رزرو بازدید'}
        description={isSent ? undefined : `${propertyName} — زمان شما را در یک روز کاری تأیید می‌کنیم.`}
      >
        {isSent ? (
          <div className="text-center">
            <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-champagne text-white">
              <Check className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-5 text-sm leading-loose text-graphite/85">
              سپاسگزاریم، {values.name.split(' ')[0]}. درخواست شما برای{' '}
              <span className="font-medium text-ink">
                {faDate(values.date)}، ساعت {values.time}
              </span>{' '}
              برای مشاور این اقامتگاه ارسال شد.
            </p>
            <Button onClick={close} className="mt-7 w-full sm:w-auto">
              بستن
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
            <Field id="viewing-name" label="نام و نام خانوادگی">
              <input
                id="viewing-name"
                autoComplete="name"
                value={values.name}
                onChange={(event) => setValues((previous) => ({ ...previous, name: event.target.value }))}
                aria-invalid={Boolean(errors.name)}
                className={fieldClassName({ invalid: Boolean(errors.name) })}
              />
              {errors.name ? <p className="text-xs text-red-600">{errors.name}</p> : null}
            </Field>

            <Field id="viewing-email" label="ایمیل">
              <input
                id="viewing-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={(event) => setValues((previous) => ({ ...previous, email: event.target.value }))}
                aria-invalid={Boolean(errors.email)}
                className={fieldClassName({ invalid: Boolean(errors.email) })}
              />
              {errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}
            </Field>

            <Field id="viewing-date" label="روز مورد نظر">
              <input
                id="viewing-date"
                type="date"
                min={today}
                value={values.date}
                onChange={(event) => setValues((previous) => ({ ...previous, date: event.target.value }))}
                aria-invalid={Boolean(errors.date)}
                className={fieldClassName({ invalid: Boolean(errors.date) })}
              />
              {errors.date ? <p className="text-xs text-red-600">{errors.date}</p> : null}
            </Field>

            <Field id="viewing-time" label="ساعت مورد نظر">
              <select
                id="viewing-time"
                value={values.time}
                onChange={(event) => setValues((previous) => ({ ...previous, time: event.target.value }))}
                className={fieldClassName({ className: 'appearance-none pe-9' })}
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </Field>

            <Field id="viewing-notes" label="چیزی هست که باید بدانیم؟ (اختیاری)" className="sm:col-span-2">
              <textarea
                id="viewing-notes"
                rows={3}
                value={values.notes}
                onChange={(event) => setValues((previous) => ({ ...previous, notes: event.target.value }))}
                className={cn(fieldClassName({ className: 'resize-y' }))}
              />
            </Field>

            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full">
                درخواست این زمان
              </Button>
            </div>
          </form>
        )}
      </Dialog>
    </>
  )
}
