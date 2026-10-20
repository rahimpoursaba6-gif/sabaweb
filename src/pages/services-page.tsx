import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { ServicesSection } from '@/components/sections/services-section'
import { SITE_NAME, useDocumentTitle } from '@/hooks/use-document-title'

const PROCESS = [
  {
    step: '01',
    title: 'Brief and search',
    description:
      'We start with the brief — budget, location, how you actually intend to use the house. Then we search the market and the private network on your behalf.',
  },
  {
    step: '02',
    title: 'Viewings and diligence',
    description:
      'Shortlisted residences are visited together. Structural, planning and service-charge questions are answered before they become conditions of sale.',
  },
  {
    step: '03',
    title: 'Negotiation and handover',
    description:
      'We negotiate, coordinate legal and financial partners, and stay with you through completion, furnishing quotes and any works you plan.',
  },
]

export default function ServicesPage() {
  useDocumentTitle(`Services — ${SITE_NAME}`)

  return (
    <>
      <PageHero
        label="Services"
        title="Advisory across the whole ownership cycle"
        description="Six disciplines, one team. Whether you are selling an architectural home, building a portfolio or relocating a family, the same advisors stay on the file."
        image="/images/estate-12.jpg"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      <ServicesSection />

      <section aria-labelledby="process-heading" className="bg-ivory py-20 lg:py-28">
        <div className="shell">
          <p className="eyebrow">How we work</p>
          <h2 id="process-heading" className="display-lg mt-4 max-w-2xl">
            Three stages, no surprises
          </h2>

          <ol className="mt-12 grid list-none gap-x-10 gap-y-12 lg:grid-cols-3">
            {PROCESS.map((item) => (
              <li key={item.step} className="border-t border-ink/12 pt-7">
                <span className="font-display text-[32px] font-normal leading-none text-champagne">{item.step}</span>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite/85">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
