import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { ServicesSection } from '@/components/sections/services-section'
import { SITE_NAME, useDocumentTitle } from '@/hooks/use-document-title'

const PROCESS = [
  {
    step: '۰۱',
    title: 'گفت‌وگو و جست‌وجو',
    description:
      'با شرح خواسته آغاز می‌کنیم — بودجه، موقعیت و این‌که واقعاً چگونه می‌خواهید از خانه استفاده کنید. سپس بازار و شبکه خصوصی را به نمایندگی از شما می‌گردیم.',
  },
  {
    step: '۰۲',
    title: 'بازدید و بررسی',
    description:
      'خانه‌های منتخب را با هم بازدید می‌کنیم. پرسش‌های سازه‌ای، شهرسازی و هزینه‌های مشترک، پیش از آن‌که شرط معامله شوند، پاسخ می‌گیرند.',
  },
  {
    step: '۰۳',
    title: 'مذاکره و تحویل',
    description:
      'مذاکره می‌کنیم، شرکای حقوقی و مالی را هماهنگ می‌کنیم و تا پایان کار، برآورد تجهیز و هر بازسازی که در نظر دارید، همراهتان می‌مانیم.',
  },
]

export default function ServicesPage() {
  useDocumentTitle(`خدمات — ${SITE_NAME}`)

  return (
    <>
      <PageHero
        label="خدمات"
        title="مشاوره در سراسر چرخه مالکیت"
        description="شش تخصص، یک تیم. چه خانه‌ای معمارانه بفروشید، چه سبد دارایی بسازید یا خانواده‌ای را جابه‌جا کنید، همان مشاوران روی پرونده می‌مانند."
        image="/images/estate-12.jpg"
        crumbs={[{ label: 'خانه', to: '/' }, { label: 'خدمات' }]}
      />

      <ServicesSection />

      <section aria-labelledby="process-heading" className="bg-ivory py-20 lg:py-28">
        <div className="shell">
          <p className="eyebrow">شیوه کار ما</p>
          <h2 id="process-heading" className="display-lg mt-4 max-w-2xl">
            سه مرحله، بدون غافلگیری
          </h2>

          <ol className="mt-12 grid list-none gap-x-10 gap-y-12 lg:grid-cols-3">
            {PROCESS.map((item) => (
              <li key={item.step} className="border-t border-ink/12 pt-7">
                <span className="font-display text-[32px] font-normal leading-none text-champagne">{item.step}</span>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite/85">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
