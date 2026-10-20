/**
 * Brand-level content: navigation, contact details, section copy and the shared
 * architectural image pool. Property records live in `properties.ts`.
 *
 * The site is published in Persian (fa) and rendered right-to-left, so every
 * user-facing string here is Persian. Machine-readable values (phone, email,
 * URLs, slugs) stay latin.
 */

export type NavLink = { label: string; to: string }

export const NAV_LINKS: NavLink[] = [
  { label: 'خانه', to: '/' },
  { label: 'املاک', to: '/properties' },
  { label: 'درباره ما', to: '/about' },
  { label: 'خدمات', to: '/services' },
  { label: 'تیم', to: '/team' },
  { label: 'تماس', to: '/contact' },
]

export const CONTACT = {
  phoneLabel: '(555) 246-7890',
  phoneHref: 'tel:+15552467890',
  email: 'hello@horizonproperties.com',
  emailHref: 'mailto:hello@horizonproperties.com',
  officeLines: ['خانه هورایزن، خیابان شورلاین، شماره ۱۱۸', 'آستین، تگزاس ۷۸۷۰۱'],
  hours: 'دوشنبه تا جمعه · ۹:۰۰ تا ۱۸:۰۰',
  socials: [
    { id: 'instagram', label: 'اینستاگرام', href: 'https://www.instagram.com/' },
    { id: 'linkedin', label: 'لینکدین', href: 'https://www.linkedin.com/' },
    { id: 'facebook', label: 'فیسبوک', href: 'https://www.facebook.com/' },
  ],
}

export const HERO = {
  image: '/images/estate-01.jpg',
  imageAlt: 'ویلای شیشه‌ای مدرن با استخر بی‌نهایت روشن در هنگام غروب',
  label: 'مشاور املاک خصوصی · از سال ۲۰۰۸',
  headline: 'خانه‌ها و سرمایه‌گذاری‌های استثنایی را کشف کنید',
  description:
    'املاک ممتاز در بهترین موقعیت‌ها. خانه رؤیایی یا سرمایه‌گذاری مناسب خود را با اطمینان پیدا کنید.',
}

export const ABOUT = {
  label: 'درباره ما',
  title: 'ما چه کسانی هستیم',
  body: 'در هورایزن پراپرتیز، ما مردم را به خانه‌های کم‌نظیر و سرمایه‌گذاری‌های هوشمندانه وصل می‌کنیم. درستکاری، شفافیت و رضایت مشتری بنیاد همه کارهای ماست.',
  secondary:
    'مشاوران ما مجموعه‌ای گزیده از خانه‌های معمارانه، املاک ساحلی و سرمایه‌گذاری‌های مرکز شهر را ارائه می‌دهند — هر یک بررسی‌شده، ارزش‌گذاری‌شده و با وسواس معرفی می‌شود.',
  cta: { label: 'بیشتر بدانید', to: '/about' },
  images: [
    { src: '/images/estate-03.jpg', alt: 'خانه دوطبقه امروزی با حیاط محوطه‌سازی‌شده' },
    { src: '/images/estate-07.jpg', alt: 'تراس باغ یک اقامتگاه لوکس در نور طلایی غروب' },
  ],
}

export type Service = {
  title: string
  description: string
}

export const SERVICES: Service[] = [
  {
    title: 'فروش خانه‌های لوکس',
    description:
      'نمایندگی محرمانه برای خانه‌های معمارانه، املاک ساحلی و اقامتگاه‌های تک‌نسخه.',
  },
  {
    title: 'سرمایه‌گذاری ملکی',
    description:
      'تحلیل بازدهی، ساخت‌دهی سبد دارایی و راهبرد خرید برای خریداران شخصی و نهادی.',
  },
  {
    title: 'بازاریابی ملک',
    description:
      'عکاسی ادیتوریال، فیلم و کمپین‌های هدفمند که یک اقامتگاه را در برابر خریداران واجد شرایط می‌گذارد.',
  },
  {
    title: 'مشاوره املاک',
    description:
      'مشاوره مستقل درباره زمان عرضه، قیمت‌گذاری و مذاکره — پیش، در جریان و پس از معامله.',
  },
  {
    title: 'ارزش‌گذاری ملک',
    description:
      'ارزش‌گذاری مستند بر پایه فروش‌های مشابه، داده‌های بازار و بازدید حضوری.',
  },
  {
    title: 'خدمات جابه‌جایی',
    description:
      'پشتیبانی کامل برای خریداران بین‌المللی: جست‌وجو، بررسی، هماهنگی حقوقی و اسکان.',
  },
]

export const WHY_CHOOSE = {
  label: 'چرا هورایزن',
  title: 'دقیق و بی‌سر‌و‌صدا، از نخستین بازدید تا امضای سند',
  description:
    'تیمی کوچک که هر خرید را همان‌قدر که تصمیمی مالی است، تصمیمی معمارانه می‌داند.',
  pillars: [
    {
      title: 'دسترسی خارج از بازار',
      description: 'شبکه‌ای خصوصی از مالکان و سازندگان، پیش از آن‌که ملکی به بازار برسد.',
    },
    {
      title: 'ارزش‌گذاری مبتنی بر داده',
      description: 'فروش‌های مشابه، بازدید فنی و داده‌های بازار پشت هر قیمتی که پیشنهاد می‌دهیم.',
    },
    {
      title: 'یک مشاور، از ابتدا تا انتها',
      description: 'همان کسی که خانه را به شما نشان می‌دهد، درباره آن مذاکره می‌کند و سال‌ها بعد هم در دسترس است.',
    },
    {
      title: 'شبکه خریداران جهانی',
      description: 'خریداران واجد شرایط در ۳۲ بازار، با مشاوره چندزبانه برای جابه‌جایی فرامرزی.',
    },
  ],
  stats: [
    { value: '۱۸', label: 'سال مشاوره' },
    { value: '۴۸۰+', label: 'ملک واگذارشده' },
    { value: '۹۶٪', label: 'رضایت مشتری' },
    { value: '۳۲', label: 'بازار فعال' },
  ],
  image: '/images/estate-11.jpg',
  imageAlt: 'اقامتگاه شیشه‌ای با بازتاب محوطه سبز اطراف',
}

export type TeamMember = {
  id: string
  name: string
  role: string
  image: string
  email: string
  phone: string
  phoneHref: string
  focus: string
  bio: string
}

export const TEAM: TeamMember[] = [
  {
    id: 'daniel-morgan',
    name: 'دانیال مورگان',
    role: 'مدیرعامل',
    image: '/images/team-1.jpg',
    email: 'daniel.morgan@horizonproperties.com',
    phone: '(555) 246-7891',
    phoneHref: 'tel:+15552467891',
    focus: 'اقامتگاه‌های مرکز شهر',
    bio: 'دانیال، هورایزن پراپرتیز را در سال ۲۰۰۸ بنیان گذاشت و رهبری بخش مشتریان خصوصی را بر عهده دارد؛ او بیشتر معاملات خارج از بازار شرکت را مذاکره می‌کند.',
  },
  {
    id: 'olivia-carter',
    name: 'اولیویا کارتر',
    role: 'مشاور املاک لوکس',
    image: '/images/team-2.jpg',
    email: 'olivia.carter@horizonproperties.com',
    phone: '(555) 246-7892',
    phoneHref: 'tel:+15552467892',
    focus: 'خانه‌های ساحلی و معمارانه',
    bio: 'اولیویا نماینده اقامتگاه‌های معمارانه و ساحلی است و بازاریابی ادیتوریال را با فهرستی از خریداران که با دقت مدیریت می‌شود همراه می‌کند.',
  },
  {
    id: 'james-wilson',
    name: 'جیمز ویلسون',
    role: 'مشاور سرمایه‌گذاری',
    image: '/images/team-3.jpg',
    email: 'james.wilson@horizonproperties.com',
    phone: '(555) 246-7893',
    phoneHref: 'tel:+15552467893',
    focus: 'بازدهی و راهبرد سبد دارایی',
    bio: 'جیمز به سرمایه‌گذاران شخصی و نهادی درباره خرید، مدل‌سازی بازدهی و ساختار بلندمدت سبد دارایی مشاوره می‌دهد.',
  },
  {
    id: 'sophia-bennett',
    name: 'سوفیا بنت',
    role: 'متخصص ارشد املاک',
    image: '/images/team-4.jpg',
    email: 'sophia.bennett@horizonproperties.com',
    phone: '(555) 246-7894',
    phoneHref: 'tel:+15552467894',
    focus: 'جابه‌جایی و خریداران بین‌المللی',
    bio: 'سوفیا خریداران بین‌المللی را در جست‌وجو، بررسی و جابه‌جایی همراهی می‌کند و شرکای حقوقی و مالی را در هر بازار هماهنگ می‌سازد.',
  },
]

export const CTA_BANNER = {
  headline: 'آماده‌اید ملک مناسب خود را پیدا کنید؟',
  description: 'بگذارید کارشناسان ما شما را به خانه یا سرمایه‌گذاری درست راهنمایی کنند.',
  button: { label: 'تماس بگیرید', to: '/contact' },
}
