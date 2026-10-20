import { HERO } from '@/data/site'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-navy-950 pb-28 pt-32 lg:min-h-[88vh] lg:pb-32 lg:pt-36"
    >
      <img
        src={HERO.image}
        alt={HERO.imageAlt}
        width={1920}
        height={1280}
        decoding="async"
        className="absolute inset-0 h-full w-full animate-hero-scale object-cover"
      />

      {/* Keeps the headline readable without flattening the photograph. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/40 to-navy-950/75"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white"
      />

      <div className="shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow animate-fade-in text-champagne-light">{HERO.label}</p>
          <h1
            id="hero-heading"
            className="display-xl mt-6 animate-fade-up font-medium text-white drop-shadow-[0_2px_24px_rgba(6,14,27,0.45)]"
          >
            {HERO.headline}
          </h1>
          <p className="body-lg mx-auto mt-7 max-w-xl animate-fade-up text-white/85 [animation-delay:140ms]">
            {HERO.description}
          </p>
        </div>
      </div>
    </section>
  )
}
