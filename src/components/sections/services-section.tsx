import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionHeading } from '@/components/ui/section-heading'
import { SERVICES, WHY_CHOOSE } from '@/data/site'
import { faIndex } from '@/lib/fa'

/**
 * Editorial services list — numbered rows and hairlines instead of icon cards,
 * with one architectural photograph holding the leading column.
 */
export function ServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="bg-white py-20 lg:py-28">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            label="خدمات"
            title={<span id="services-heading">مشاوره در سراسر چرخه مالکیت</span>}
            description="از نخستین ارزش‌گذاری تا روزی که کلیدها را تحویل می‌دهید، یک تیم روی پرونده می‌ماند."
          />
          <figure className="group mt-10 overflow-hidden rounded-[10px] bg-mist">
            <img
              src={WHY_CHOOSE.image}
              alt={WHY_CHOOSE.imageAlt}
              width={1400}
              height={1000}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.04]"
            />
          </figure>
        </div>

        <ul className="border-t border-ink/10">
          {SERVICES.map((service, index) => (
            <li key={service.title} className="border-b border-ink/10">
              <Link
                to="/services"
                className="group flex items-start gap-5 py-7 transition-colors duration-300 sm:gap-8 sm:px-4"
              >
                <span className="mt-1.5 font-sans text-[11px] font-semibold tracking-label text-champagne">
                  {faIndex(index + 1)}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-xl font-medium text-ink transition-colors duration-300 group-hover:text-navy-700 sm:text-[26px]">
                    {service.title}
                  </span>
                  <span className="mt-2 block max-w-lg text-sm leading-loose text-graphite/80">
                    {service.description}
                  </span>
                </span>
                <ArrowUpRight
                  className="mt-2 h-5 w-5 shrink-0 text-graphite/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-champagne"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
