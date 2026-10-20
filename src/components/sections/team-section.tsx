import { Mail, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { TEAM } from '@/data/site'

export function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="bg-ivory py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          align="center"
          label="تیم ما"
          title={<span id="team-heading">مشاور، نه واسطه</span>}
          description="چهار متخصص، هر یک با تخصصی مشخص — تا همیشه با کسی سخن بگویید که بازار شما را می‌شناسد."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {TEAM.map((member, index) => (
            <Reveal key={member.id} delay={index * 90}>
              <article className="group">
                <figure className="m-0 overflow-hidden rounded-[10px] bg-mist">
                  <img
                    src={member.image}
                    alt={`${member.name}، ${member.role}`}
                    width={900}
                    height={1125}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover object-top grayscale-[18%] transition-all duration-[900ms] ease-editorial group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                </figure>
                <h3 className="mt-5 font-display text-lg font-medium text-ink">{member.name}</h3>
                <p className="mt-1.5 font-sans text-[11px] font-semibold uppercase tracking-label text-champagne">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-loose text-graphite/75">{member.focus}</p>
                <div className="mt-4 flex gap-2.5">
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`ارسال ایمیل به ${member.name}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-graphite transition-colors duration-300 hover:border-champagne hover:text-champagne"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={member.phoneHref}
                    aria-label={`تماس تلفنی با ${member.name}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-graphite transition-colors duration-300 hover:border-champagne hover:text-champagne"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/team" variant="outline" size="lg">
            آشنایی با تیم
          </Button>
        </div>
      </div>
    </section>
  )
}
