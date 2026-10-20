import { Route, Routes } from 'react-router-dom'

import { ScrollToTop } from '@/components/layout/scroll-to-top'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { FavoritesProvider } from '@/context/favorites-provider'
import AboutPage from '@/pages/about-page'
import ContactPage from '@/pages/contact-page'
import HomePage from '@/pages/home-page'
import NotFoundPage from '@/pages/not-found-page'
import PropertiesPage from '@/pages/properties-page'
import PropertyDetailPage from '@/pages/property-detail-page'
import ServicesPage from '@/pages/services-page'
import TeamPage from '@/pages/team-page'

export default function App() {
  return (
    <FavoritesProvider>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        پرش به محتوای اصلی
      </a>
      <div className="flex min-h-screen flex-col bg-white">
        <SiteHeader />
        <main id="main" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/properties/:slug" element={<PropertyDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </FavoritesProvider>
  )
}
