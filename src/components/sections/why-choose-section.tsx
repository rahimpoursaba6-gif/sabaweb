import { Reveal } from '@/components/ui/reveal'
import { WHY_CHOOSE } from '@/data/site'

export function WhyChooseSection() {
  return (
    <section aria-labelledby="why-choose-heading" className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
      <img
        src={WHY_CHOOSE.image}
        alt=""
        aria-hidden="true"
        width={1400}
        height={1000}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 object-cover opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/60"
      />

      <div className="shell relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow text-champagne-light">{WHY_CHOOSE.label}</p>
          <h2 id="why-choose-heading" className="display-lg mt-4 font-medium text-white">
            {WHY_CHOOSE.title}
          </h2>
          <p className="body-lg mt-6 max-w-lg text-white/70">{WHY_CHOOSE.description}</p>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-10">
            {WHY_CHOOSE.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-[40px] font-normal leading-none text-champagne">
                    {stat.value}
                  </span>
                  <span className="mt-3 block font-sans text-[11px] font-semibold uppercase tracking-label text-white/55">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={140}>
          <ul className="border-t border-white/12">
            {WHY_CHOOSE.pillars.map((pillar) => (
              <li key={pillar.title} className="border-b border-white/12 py-7 first:pt-0">
                <h3 className="font-display text-lg font-medium text-white">{pillar.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">{pillar.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
