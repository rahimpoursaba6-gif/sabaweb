import { ArrowRight } from 'lucide-react'

import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { PROPERTIES } from '@/data/properties'
import { SITE_NAME, useDocumentTitle } from '@/hooks/use-document-title'

export default function NotFoundPage() {
  useDocumentTitle(`Page not found — ${SITE_NAME}`)

  const suggestions = PROPERTIES.slice(0, 3)

  return (
    <>
      <PageHero
        label="404"
        title="We could not find that page"
        description="The link may be out of date. The portfolio and the featured residences below are a good place to pick things up."
        image="/images/estate-10.jpg"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Not found' }]}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="shell">
          <div className="flex flex-wrap gap-4">
            <Button to="/" size="lg">
              Back to homepage
            </Button>
            <Button to="/properties" variant="outline" size="lg">
              Browse properties
            </Button>
          </div>

          <h2 className="eyebrow mt-16">Currently available</h2>
          <ul className="mt-8 grid list-none gap-4 sm:grid-cols-3">
            {suggestions.map((property) => (
              <li key={property.id}>
                <Button to={`/properties/${property.slug}`} variant="ghost" className="text-left">
                  <span className="font-display text-base font-medium text-ink">{property.name}</span>
                  <ArrowRight className="h-4 w-4 text-champagne" aria-hidden="true" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
