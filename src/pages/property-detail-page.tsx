import { Check, Mail, MapPin, Phone } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { InquiryForm } from '@/components/forms/inquiry-form'
import { ScheduleViewingDialog } from '@/components/forms/schedule-viewing-dialog'
import { FavoriteButton } from '@/components/properties/favorite-button'
import { PropertyCard } from '@/components/properties/property-card'
import { PropertyGallery } from '@/components/properties/property-gallery'
import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { formatPrice, getPropertyBySlug, getSimilarProperties } from '@/data/properties'
import { TEAM } from '@/data/site'
import { SITE_NAME, useDocumentTitle } from '@/hooks/use-document-title'
import { fa } from '@/lib/fa'

export default function PropertyDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const property = slug ? getPropertyBySlug(slug) : undefined

  useDocumentTitle(property ? `${property.name} — ${SITE_NAME}` : `ملک پیدا نشد — ${SITE_NAME}`)

  if (!property) {
    return (
      <>
        <PageHero
          label="پیدا نشد"
          title="این ملک دیگر در فهرست نیست"
          description="ممکن است این اقامتگاه فروخته یا از فهرست خارج شده باشد. برای دیدن املاک موجود امروز، فهرست کنونی را ببینید."
          crumbs={[{ label: 'خانه', to: '/' }, { label: 'املاک', to: '/properties' }, { label: 'پیدا نشد' }]}
        />
        <section className="bg-white py-16 lg:py-20">
          <div className="shell">
            <Button to="/properties" size="lg">
              بازگشت به همه املاک
            </Button>
          </div>
        </section>
      </>
    )
  }

  const agent = TEAM.find((member) => member.id === property.agentId) ?? TEAM[0]!
  const similar = getSimilarProperties(property, 3)

  const stats: { label: string; value: string }[] = [
    { label: 'اتاق خواب', value: fa(property.beds) },
    { label: 'حمام', value: fa(property.baths) },
    { label: 'زیربنا', value: `${fa(property.sqft)} فوت مربع` },
    { label: 'سال ساخت', value: fa(property.yearBuilt) },
    { label: 'پارکینگ', value: `${fa(property.parking)} خودرو` },
    { label: 'زمین', value: property.lotAcres > 0 ? `${fa(property.lotAcres)} ایکر` : 'بدون زمین اختصاصی' },
  ]

  return (
    <>
      <PageHero
        label={property.status === 'فهرست جدید' ? 'فهرست جدید' : property.type}
        title={property.name}
        description={property.summary}
        image={property.images[0]?.src}
        crumbs={[
          { label: 'خانه', to: '/' },
          { label: 'املاک', to: '/properties' },
          { label: property.name },
        ]}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="inline-flex items-center gap-2 text-sm text-white/75">
            <MapPin className="h-4 w-4 text-champagne" aria-hidden="true" />
            {property.location}
          </span>
          <span className="font-display text-xl font-medium text-champagne">{formatPrice(property.price)}</span>
          <span className="rounded-full border border-white/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-label text-white/70">
            {property.status}
          </span>
        </div>
      </PageHero>

      <section className="bg-white py-14 lg:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
          {/* min-w-0 keeps wide children (gallery thumbnails) from stretching the track */}
          <div className="min-w-0">
            <PropertyGallery images={property.images} name={property.name} />

            <div className="mt-12">
              <h2 className="display-md">درباره این اقامتگاه</h2>
              {property.description.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-[15px] leading-loose text-graphite">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-sans text-[11px] font-semibold uppercase tracking-label text-graphite/60">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-[17px] font-medium text-ink">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="eyebrow">ویژگی‌های کلیدی</h3>
                <ul className="mt-5 space-y-3">
                  {property.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-loose text-graphite">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="eyebrow">امکانات</h3>
                <ul className="mt-5 space-y-3">
                  {property.amenities.map((amenity) => (
                    <li key={amenity} className="flex gap-3 text-sm leading-loose text-graphite">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14">
              <InquiryForm
                propertyName={property.name}
                title="درباره این اقامتگاه از مشاور بپرسید"
                description="نقشه طبقات، هزینه‌های مشترک، زمان بازدید — یادداشتی بفرستید تا همان روز پاسخ دهیم."
              />
            </div>
          </div>

          <aside className="flex min-w-0 flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[12px] border border-ink/10 bg-white p-6 shadow-[0_1px_2px_rgba(11,28,51,0.05)]">
              <p className="font-display text-[26px] font-medium leading-tight text-navy-900">
                {formatPrice(property.price)}
              </p>
              <p className="mt-2 text-[13px] text-graphite/70">
                {property.type} · {property.location}
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-ink/10 py-5 text-center">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-label text-graphite/60">خواب</dt>
                  <dd className="mt-1 font-display text-lg text-ink">{fa(property.beds)}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-label text-graphite/60">حمام</dt>
                  <dd className="mt-1 font-display text-lg text-ink">{fa(property.baths)}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-label text-graphite/60">فوت مربع</dt>
                  <dd className="mt-1 font-display text-lg text-ink">{fa(property.sqft)}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-col gap-3">
                <ScheduleViewingDialog propertyName={property.name} variant="primary" className="w-full" />
                <Button href={agent.phoneHref} variant="outline" className="w-full">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  تماس با {agent.name.split(' ')[0]}
                </Button>
                <div className="flex items-center justify-between gap-4 pt-1">
                  <span className="text-[13px] text-graphite/70">ذخیره برای بعد</span>
                  <FavoriteButton slug={property.slug} name={property.name} />
                </div>
              </div>
            </div>

            <div className="rounded-[12px] border border-ink/10 bg-ivory p-6">
              <h2 className="eyebrow">مشاور شما</h2>
              <div className="mt-5 flex items-center gap-4">
                <img
                  src={agent.image}
                  alt={`${agent.name}، ${agent.role}`}
                  width={900}
                  height={1125}
                  loading="lazy"
                  className="h-16 w-16 rounded-full object-cover object-top"
                />
                <div>
                  <p className="font-display text-[17px] font-medium text-ink">{agent.name}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-label text-champagne">
                    {agent.role}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-loose text-graphite/85">{agent.bio}</p>
              <div className="mt-5 flex flex-col gap-3 text-sm">
                <a
                  href={`mailto:${agent.email}?subject=${encodeURIComponent(property.name)}`}
                  className="inline-flex items-center gap-2 text-graphite transition-colors duration-300 hover:text-champagne"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span dir="ltr" className="truncate">
                    {agent.email}
                  </span>
                </a>
                <a
                  href={agent.phoneHref}
                  className="inline-flex items-center gap-2 text-graphite transition-colors duration-300 hover:text-champagne"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span dir="ltr">{agent.phone}</span>
                </a>
              </div>
              <Link
                to="/team"
                className="mt-5 inline-block text-[13px] font-medium text-navy-900 underline decoration-champagne/60 underline-offset-4 transition-colors hover:text-champagne"
              >
                آشنایی با کل تیم
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="shell">
          <SectionHeading label="املاک مشابه" title="شاید این‌ها را هم بپسندید" />
          <ul className="mt-10 grid list-none gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((item) => (
              <li key={item.id}>
                <PropertyCard property={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mobile conversion bar — clears itself at the end of the page. */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 px-5 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-[15px] font-medium text-navy-900">{formatPrice(property.price)}</p>
            <p className="text-[11px] text-graphite/70">
              {property.city}، {property.region}
            </p>
          </div>
          <ScheduleViewingDialog propertyName={property.name} label="رزرو بازدید" variant="primary" />
        </div>
      </div>
      <div aria-hidden="true" className="h-[72px] bg-ivory lg:hidden" />
    </>
  )
}
