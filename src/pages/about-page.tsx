import { AboutSection } from '@/components/sections/about-section'
import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { TeamSection } from '@/components/sections/team-section'
import { WhyChooseSection } from '@/components/sections/why-choose-section'
import { SITE_NAME, useDocumentTitle } from '@/hooks/use-document-title'

const MILESTONES = [
  { year: '2008', title: 'Founded in Austin', description: 'Two advisors, one office and a list of twelve private clients.' },
  { year: '2014', title: 'Investment desk opens', description: 'A dedicated advisory practice for yield and portfolio buyers.' },
  { year: '2019', title: 'Cross-border practice', description: 'Buyers in thirty-two markets, with multilingual representation.' },
  { year: '2024', title: 'The Horizon House', description: 'A permanent home for viewings, valuations and client evenings.' },
]

export default function AboutPage() {
  useDocumentTitle(`About Us — ${SITE_NAME}`)

  return (
    <>
      <PageHero
        label="About Us"
        title="A brokerage built around architecture, not inventory"
        description="Horizon Properties represents a small, deliberate portfolio of residences and investments. We take on fewer listings so that each one gets the attention it deserves."
        image="/images/estate-03.jpg"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      <AboutSection />

      <section aria-labelledby="milestones-heading" className="bg-white pb-20 lg:pb-28">
        <div className="shell">
          <h2 id="milestones-heading" className="eyebrow">
            Our Story
          </h2>
          <ol className="mt-10 grid list-none gap-10 border-t border-ink/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((milestone) => (
              <li key={milestone.year}>
                <p className="font-display text-[32px] font-normal leading-none text-champagne">{milestone.year}</p>
                <h3 className="mt-4 font-display text-lg font-medium text-ink">{milestone.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite/80">{milestone.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <WhyChooseSection />
      <TeamSection />
      <CtaSection />
    </>
  )
}
