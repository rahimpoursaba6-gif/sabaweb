import { PropertyBrowser } from '@/components/properties/property-browser'
import { PageHero } from '@/components/sections/page-hero'
import { SITE_NAME, useDocumentTitle } from '@/hooks/use-document-title'

export default function PropertiesPage() {
  useDocumentTitle(`املاک — ${SITE_NAME}`)

  return (
    <>
      <PageHero
        label="فهرست املاک"
        title="املاک"
        description="فهرست کنونی خانه‌ها و سرمایه‌گذاری‌ها را ببینید. بر پایه موقعیت، نوع، قیمت، اتاق خواب و حمام فیلتر کنید — جست‌وجوی شما در نوار آدرس می‌ماند، پس می‌توانید آن را هم‌رسانی کنید یا بعداً به آن بازگردید."
        image="/images/estate-11.jpg"
        crumbs={[{ label: 'خانه', to: '/' }, { label: 'املاک' }]}
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="shell">
          <PropertyBrowser />
        </div>
      </section>
    </>
  )
}
