import { Facebook, Instagram, Linkedin } from 'lucide-react'
import type { ComponentType } from 'react'
import { Link } from 'react-router-dom'

import { BrandMark } from '@/components/layout/brand-mark'
import { NewsletterForm } from '@/components/forms/newsletter-form'
import { CONTACT, NAV_LINKS, SERVICES } from '@/data/site'
import { fa } from '@/lib/fa'

const SOCIAL_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
}

const columnTitleClassName =
  'font-sans text-[11.5px] font-semibold uppercase tracking-label text-white/55'

export function SiteFooter() {
  const serviceLinks = SERVICES.map((service) => ({ label: service.title, to: '/services' }))

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <BrandMark tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-loose">
              دفتری کوچک برای خانه‌های معمارانه، املاک ساحلی و سرمایه‌گذاری‌های مرکز شهر — همراه
              مشتریان خصوصی از سال ۲۰۰۸.
            </p>
            <ul className="mt-7 flex gap-3">
              {CONTACT.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.id]
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${social.label} (در زبانه جدید باز می‌شود)`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors duration-300 hover:border-champagne hover:text-champagne"
                    >
                      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <nav aria-label="ناوبری پاورقی">
            <h2 className={columnTitleClassName}>دسترسی سریع</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors duration-300 hover:text-champagne">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="خدمات">
            <h2 className={columnTitleClassName}>خدمات</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition-colors duration-300 hover:text-champagne">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={columnTitleClassName}>تماس</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="transition-colors duration-300 hover:text-champagne"
                >
                  <span dir="ltr">{CONTACT.phoneLabel}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="transition-colors duration-300 hover:text-champagne"
                >
                  <span dir="ltr">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                {CONTACT.officeLines.map((line) => (
                  <span key={line} className="block leading-loose">
                    {line}
                  </span>
                ))}
              </li>
              <li className="text-white/50">{CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <NewsletterForm />
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {fa(new Date().getFullYear())} هورایزن پراپرتیز. همه حقوق محفوظ است.</p>
          <p>دفتر املاک دارای مجوز · آستین، تگزاس</p>
        </div>
      </div>
    </footer>
  )
}
