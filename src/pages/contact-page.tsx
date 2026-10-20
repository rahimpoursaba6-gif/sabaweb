import { Clock, Mail, MapPin, Phone } from 'lucide-react'

import { InquiryForm } from '@/components/forms/inquiry-form'
import { PageHero } from '@/components/sections/page-hero'
import { CONTACT } from '@/data/site'
import { SITE_NAME, useDocumentTitle } from '@/hooks/use-document-title'

const ICONS = { Phone, Mail, MapPin, Clock }

export default function ContactPage() {
  useDocumentTitle(`تماس — ${SITE_NAME}`)

  const details: { label: string; icon: keyof typeof ICONS; value: string; href?: string; ltr?: boolean }[] = [
    { label: 'تلفن', icon: 'Phone', value: CONTACT.phoneLabel, href: CONTACT.phoneHref, ltr: true },
    { label: 'ایمیل', icon: 'Mail', value: CONTACT.email, href: CONTACT.emailHref, ltr: true },
    { label: 'دفتر', icon: 'MapPin', value: CONTACT.officeLines.join('، ') },
    { label: 'ساعات کاری', icon: 'Clock', value: CONTACT.hours },
  ]

  return (
    <>
      <PageHero
        label="تماس"
        title="گفت‌وگو را آغاز کنیم"
        description="به ما بگویید دنبال چه هستید — یک خانه، یک سرمایه‌گذاری، یا ارزش‌گذاری ملکی که از قبل دارید. یکی از مشاوران ما در یک روز کاری پاسخ می‌دهد."
        image="/images/estate-09.jpg"
        crumbs={[{ label: 'خانه', to: '/' }, { label: 'تماس' }]}
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <InquiryForm
            title="برای ما پیام بفرستید"
            description="هر چه می‌خواهید بگویید — بودجه، زمان، موقعیت. این به ما کمک می‌کند آماده‌تر برسیم."
          />

          <div>
            <h2 className="eyebrow">خطوط مستقیم</h2>
            <dl className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
              {details.map((detail) => {
                const Icon = ICONS[detail.icon]
                return (
                  <div key={detail.label} className="flex gap-4 py-5">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/40 text-champagne">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <dt className="font-sans text-[11px] font-semibold uppercase tracking-label text-graphite/55">
                        {detail.label}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-ink" dir={detail.ltr ? 'ltr' : undefined}>
                        {detail.href ? (
                          <a href={detail.href} className="transition-colors duration-300 hover:text-champagne">
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </dd>
                    </div>
                  </div>
                )
              })}
            </dl>

            <figure className="mt-10 overflow-hidden rounded-[12px] bg-mist">
              <img
                src="/images/estate-06.jpg"
                alt="خانه هورایزن، فضای بازدید و مشاوره این دفتر"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-xs leading-relaxed text-graphite/70">
                بازدیدها در خانه هورایزن با وقت قبلی انجام می‌شود — از جمله شب‌ها و آخر هفته‌ها.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}
