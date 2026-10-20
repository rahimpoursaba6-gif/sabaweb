import { AboutSection } from '@/components/sections/about-section'
import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { TeamSection } from '@/components/sections/team-section'
import { WhyChooseSection } from '@/components/sections/why-choose-section'
import { SITE_NAME, useDocumentTitle } from '@/hooks/use-document-title'

const MILESTONES = [
  {
    year: '۲۰۰۸',
    title: 'بنیان‌گذاری در آستین',
    description: 'دو مشاور، یک دفتر و فهرستی از دوازده مشتری خصوصی.',
  },
  {
    year: '۲۰۱۴',
    title: 'راه‌اندازی بخش سرمایه‌گذاری',
    description: 'واحدی اختصاصی برای مشاوره بازدهی و خریداران سبد دارایی.',
  },
  {
    year: '۲۰۱۹',
    title: 'فعالیت فرامرزی',
    description: 'خریدارانی در سی‌ودو بازار، با نمایندگی چندزبانه.',
  },
  {
    year: '۲۰۲۴',
    title: 'خانه هورایزن',
    description: 'خانه‌ای دائمی برای بازدیدها، ارزش‌گذاری‌ها و شب‌های مشتریان.',
  },
]

export default function AboutPage() {
  useDocumentTitle(`درباره ما — ${SITE_NAME}`)

  return (
    <>
      <PageHero
        label="درباره ما"
        title="دفتری که گرد معماری ساخته شده، نه گرد فهرست ملک"
        description="هورایزن پراپرتیز مجموعه‌ای کوچک و آگاهانه از خانه‌ها و سرمایه‌گذاری‌ها را نمایندگی می‌کند. ما ملک کمتری می‌پذیریم تا هر یک از آن‌ها توجهی را که شایسته‌اش است دریافت کند."
        image="/images/estate-03.jpg"
        crumbs={[{ label: 'خانه', to: '/' }, { label: 'درباره ما' }]}
      />

      <AboutSection />

      <section aria-labelledby="milestones-heading" className="bg-white pb-20 lg:pb-28">
        <div className="shell">
          <h2 id="milestones-heading" className="eyebrow">
            داستان ما
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
