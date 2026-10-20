import { ArrowRight } from 'lucide-react'

import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { PROPERTIES } from '@/data/properties'
import { SITE_NAME, useDocumentTitle } from '@/hooks/use-document-title'

export default function NotFoundPage() {
  useDocumentTitle(`صفحه پیدا نشد — ${SITE_NAME}`)

  const suggestions = PROPERTIES.slice(0, 3)

  return (
    <>
      <PageHero
        label="۴۰۴"
        title="آن صفحه را پیدا نکردیم"
        description="ممکن است این پیوند قدیمی شده باشد. فهرست املاک و اقامتگاه‌های ویژه در پایین، جای خوبی برای ادامه دادن است."
        image="/images/estate-10.jpg"
        crumbs={[{ label: 'خانه', to: '/' }, { label: 'پیدا نشد' }]}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="shell">
          <div className="flex flex-wrap gap-4">
            <Button to="/" size="lg">
              بازگشت به صفحه اصلی
            </Button>
            <Button to="/properties" variant="outline" size="lg">
              مشاهده املاک
            </Button>
          </div>

          <h2 className="eyebrow mt-16">اکنون موجود</h2>
          <ul className="mt-8 grid list-none gap-4 sm:grid-cols-3">
            {suggestions.map((property) => (
              <li key={property.id}>
                <Button to={`/properties/${property.slug}`} variant="ghost" className="text-start">
                  <span className="font-display text-base font-medium text-ink">{property.name}</span>
                  <ArrowRight className="h-4 w-4 text-champagne rtl:-scale-x-100" aria-hidden="true" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
