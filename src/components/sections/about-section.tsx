import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { ABOUT } from '@/data/site'

/** Editorial two-column introduction with a small, working image slider. */
export function AboutSection() {
  const [index, setIndex] = useState(0)
  const total = ABOUT.images.length
  const current = ABOUT.images[index % total] ?? ABOUT.images[0]!
  const next = ABOUT.images[(index + 1) % total] ?? ABOUT.images[0]!

  return (
    <section aria-labelledby="about-heading" className="bg-white py-20 lg:py-28">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">{ABOUT.label}</p>
          <h2 id="about-heading" className="display-lg mt-4">
            {ABOUT.title}
          </h2>
          <p className="body-lg mt-6 max-w-xl text-graphite">{ABOUT.body}</p>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-graphite/75">{ABOUT.secondary}</p>
          <Button to={ABOUT.cta.to} className="mt-9">
            {ABOUT.cta.label}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" aria-hidden="true" />
          </Button>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="grid grid-cols-[1.55fr_1fr] items-end gap-4 sm:gap-5">
            <figure className="group m-0 overflow-hidden rounded-[10px] bg-mist">
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                width={1200}
                height={1500}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full animate-fade-in object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.04]"
              />
            </figure>
            <figure className="group m-0 overflow-hidden rounded-[10px] bg-mist">
              <img
                key={next.src}
                src={next.src}
                alt={next.alt}
                width={1200}
                height={1500}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.04]"
              />
            </figure>
          </div>

          <button
            type="button"
            onClick={() => setIndex((value) => (value + 1) % total)}
            aria-label="Show the next image"
            className="absolute -bottom-5 left-[46%] inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white shadow-[0_14px_32px_rgba(11,28,51,0.28)] transition-colors duration-300 hover:bg-champagne hover:text-navy-950"
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <p aria-live="polite" className="sr-only">
            Showing image {index + 1} of {total}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
