import { ArrowRight } from 'lucide-react'

import { PropertyCard } from '@/components/properties/property-card'
import { ScrollCarousel } from '@/components/properties/scroll-carousel'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { FEATURED_PROPERTIES } from '@/data/properties'

export function FeaturedProperties() {
  return (
    <section aria-labelledby="featured-properties-heading" className="bg-ivory py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          align="center"
          label="Featured"
          title={<span id="featured-properties-heading">Featured Properties</span>}
          description="A short list from the current portfolio — each residence visited, valued and photographed by our advisors."
        />
      </div>

      <div className="shell mt-12 lg:mt-14">
        <ScrollCarousel label="Featured properties">
          {FEATURED_PROPERTIES.map((property, index) => (
            <div
              key={property.id}
              className="w-[78vw] max-w-[420px] shrink-0 snap-start sm:w-[340px] lg:w-[304px]"
            >
              <PropertyCard property={property} variant="featured" priority={index < 3} />
            </div>
          ))}
        </ScrollCarousel>
      </div>

      <div className="shell mt-12 flex justify-center">
        <Button to="/properties" variant="outline" size="lg">
          View all properties
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" aria-hidden="true" />
        </Button>
      </div>
    </section>
  )
}
