import { AboutSection } from '@/components/sections/about-section'
import { CtaSection } from '@/components/sections/cta-section'
import { FeaturedProperties } from '@/components/sections/featured-properties'
import { Hero } from '@/components/sections/hero'
import { ServicesSection } from '@/components/sections/services-section'
import { TeamSection } from '@/components/sections/team-section'
import { WhyChooseSection } from '@/components/sections/why-choose-section'
import { SITE_NAME, useDocumentTitle } from '@/hooks/use-document-title'

export default function HomePage() {
  useDocumentTitle(`${SITE_NAME} — خانه‌ها و سرمایه‌گذاری‌های استثنایی`)

  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProperties />
      <ServicesSection />
      <WhyChooseSection />
      <TeamSection />
      <CtaSection />
    </>
  )
}
