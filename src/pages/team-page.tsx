import { Mail, Phone } from 'lucide-react'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { Reveal } from '@/components/ui/reveal'
import { TEAM } from '@/data/site'
import { SITE_NAME, useDocumentTitle } from '@/hooks/use-document-title'

export default function TeamPage() {
  useDocumentTitle(`تیم — ${SITE_NAME}`)

  return (
    <>
      <PageHero
        label="تیم ما"
        title="کسانی که واقعاً با آن‌ها کار خواهید کرد"
        description="چهار متخصص با تخصص‌های مشخص. نه مرکز تلفن، نه واگذاری به کارآموز — همان مشاوری که اقامتگاه را نشان می‌دهد، درباره آن مذاکره می‌کند."
        image="/images/estate-06.jpg"
        crumbs={[{ label: 'خانه', to: '/' }, { label: 'تیم' }]}
      />

      <section aria-labelledby="team-page-heading" className="bg-white py-16 lg:py-24">
        <div className="shell">
          <h2 id="team-page-heading" className="sr-only">
            مشاوران ما
          </h2>

          <ul className="grid list-none gap-14 lg:grid-cols-2 lg:gap-16">
            {TEAM.map((member, index) => (
              <li key={member.id}>
                <Reveal delay={index * 80} className="grid gap-6 sm:grid-cols-[200px_1fr] sm:gap-8">
                  <figure className="group m-0 overflow-hidden rounded-[10px] bg-mist">
                    <img
                      src={member.image}
                      alt={`${member.name}، ${member.role}`}
                      width={900}
                      height={1125}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full object-cover object-top transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.03]"
                    />
                  </figure>

                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink">{member.name}</h3>
                    <p className="mt-2 font-sans text-[11px] font-semibold uppercase tracking-label text-champagne">
                      {member.role}
                    </p>
                    <p className="mt-5 text-sm leading-loose text-graphite/85">{member.bio}</p>

                    <dl className="mt-6 space-y-3 text-sm">
                      <div className="flex gap-3">
                        <dt className="w-16 shrink-0 pt-0.5 text-[11px] font-semibold uppercase tracking-label text-graphite/55">
                          تمرکز
                        </dt>
                        <dd className="text-graphite">{member.focus}</dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="w-16 shrink-0 pt-0.5 text-[11px] font-semibold uppercase tracking-label text-graphite/55">
                          ایمیل
                        </dt>
                        <dd className="min-w-0">
                          <a
                            href={`mailto:${member.email}`}
                            dir="ltr"
                            className="inline-flex items-center gap-2 text-graphite transition-colors duration-300 hover:text-champagne"
                          >
                            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                            {member.email}
                          </a>
                        </dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="w-16 shrink-0 pt-0.5 text-[11px] font-semibold uppercase tracking-label text-graphite/55">
                          تلفن
                        </dt>
                        <dd>
                          <a
                            href={member.phoneHref}
                            className="inline-flex items-center gap-2 text-graphite transition-colors duration-300 hover:text-champagne"
                          >
                            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                            <span dir="ltr">{member.phone}</span>
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
