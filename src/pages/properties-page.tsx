import { PropertyBrowser } from '@/components/properties/property-browser'
import { PageHero } from '@/components/sections/page-hero'
import { SITE_NAME, useDocumentTitle } from '@/hooks/use-document-title'

export default function PropertiesPage() {
  useDocumentTitle(`Properties — ${SITE_NAME}`)

  return (
    <>
      <PageHero
        label="Portfolio"
        title="Properties"
        description="Browse the current portfolio of residences and investments. Filter by location, type, price, bedrooms and bathrooms — your search is kept in the address bar, so you can share it or come back to it."
        image="/images/estate-11.jpg"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Properties' }]}
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="shell">
          <PropertyBrowser />
        </div>
      </section>
    </>
  )
}
