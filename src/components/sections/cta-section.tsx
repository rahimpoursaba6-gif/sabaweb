import { ArrowRight, KeyRound } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { CTA_BANNER } from '@/data/site'

export function CtaSection() {
  return (
    <section aria-labelledby="cta-heading" className="bg-white pb-20 pt-4 lg:pb-28">
      <div className="shell">
        <div className="rounded-[14px] bg-mist px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
          <div className="flex flex-col gap-9 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-champagne/45 bg-white text-champagne">
                <KeyRound className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 id="cta-heading" className="display-md">
                  {CTA_BANNER.headline}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-graphite/85">
                  {CTA_BANNER.description}
                </p>
              </div>
            </div>
            <Button to={CTA_BANNER.button.to} size="lg" className="shrink-0">
              {CTA_BANNER.button.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
