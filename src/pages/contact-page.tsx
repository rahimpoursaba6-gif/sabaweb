import { Clock, Mail, MapPin, Phone } from 'lucide-react'

import { InquiryForm } from '@/components/forms/inquiry-form'
import { PageHero } from '@/components/sections/page-hero'
import { CONTACT } from '@/data/site'
import { SITE_NAME, useDocumentTitle } from '@/hooks/use-document-title'

const ICONS = { Phone, Mail, MapPin, Clock }

export default function ContactPage() {
  useDocumentTitle(`Contact — ${SITE_NAME}`)

  const details: { label: string; icon: keyof typeof ICONS; value: string; href?: string }[] = [
    { label: 'Telephone', icon: 'Phone', value: CONTACT.phoneLabel, href: CONTACT.phoneHref },
    { label: 'Email', icon: 'Mail', value: CONTACT.email, href: CONTACT.emailHref },
    { label: 'Office', icon: 'MapPin', value: CONTACT.officeLines.join(', ') },
    { label: 'Opening hours', icon: 'Clock', value: CONTACT.hours },
  ]

  return (
    <>
      <PageHero
        label="Contact"
        title="Start a conversation"
        description="Tell us what you are looking for — a home, an investment, or a valuation on something you already own. An advisor will reply within one business day."
        image="/images/estate-09.jpg"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <InquiryForm
            title="Send us a message"
            description="Share as much or as little as you like — budget, timing, location. It helps us come prepared."
          />

          <div>
            <h2 className="eyebrow">Direct lines</h2>
            <dl className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
              {details.map((detail) => {
                const Icon = ICONS[detail.icon]
                return (
                  <div key={detail.label} className="flex gap-4 py-5">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/40 text-champagne">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="font-sans text-[10.5px] font-semibold uppercase tracking-label text-graphite/55">
                        {detail.label}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-ink">
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
                alt="Horizon House, the firm’s viewing and advisory space"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-xs text-graphite/70">
                Viewings at Horizon House are by appointment — including evenings and weekends.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}
