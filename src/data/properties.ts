/**
 * Property records.
 *
 * The shape is deliberately database-ready: one flat record per residence with a
 * string id, scalar search fields (price, beds, baths, type, location) and an
 * ordered image list. Swapping this module for an API/DB call later means
 * returning the same `Property` shape from a loader — no component changes.
 *
 * Content is Persian (the site is published in fa / RTL); ids, slugs and image
 * paths stay latin so URLs and asset routes are untouched.
 */

export type PropertyType =
  | 'ویلا'
  | 'عمارت'
  | 'اقامتگاه ساحلی'
  | 'خانه'
  | 'پنتهاوس'
  | 'تاونهاوس'

export type PropertyStatus = 'برای فروش' | 'فهرست جدید' | 'فروش خصوصی'

export type Property = {
  id: string
  slug: string
  name: string
  city: string
  region: string
  country: string
  location: string
  price: number
  type: PropertyType
  status: PropertyStatus
  beds: number
  baths: number
  sqft: number
  lotAcres: number
  yearBuilt: number
  parking: number
  featured: boolean
  summary: string
  description: string[]
  features: string[]
  amenities: string[]
  agentId: string
  images: { src: string; alt: string }[]
}

const image = (src: string, alt: string) => ({ src, alt })

export const PROPERTIES: Property[] = [
  {
    id: 'prop-001',
    slug: 'lakeside-modern-villa',
    name: 'ویلای مدرن کنار دریاچه',
    city: 'آستین',
    region: 'تگزاس',
    country: 'آمریکا',
    location: 'آستین، تگزاس، آمریکا',
    price: 2_350_000,
    type: 'ویلا',
    status: 'برای فروش',
    beds: 5,
    baths: 6,
    sqft: 6420,
    lotAcres: 1.2,
    yearBuilt: 2021,
    parking: 3,
    featured: true,
    summary: 'ویلایی شیشهای بر کرانه آب، ساختهشده گرد حیاطی سرپوشیده و تراسی رو به دریاچه.',
    description: [
      'ویلای مدرن کنار دریاچه روی بخشی آرام از ساحل نشسته است و از طریق ستون فقرهای شیشهای و تمامقد، فضاهای زندگی را مستقیم به آب میرساند. بتن، چوب بلوط و جزئیات برنزی، پالت را در برابر نور متغیر دریاچه گرم نگه میدارند.',
      'سوئیت اصلی بال خود را با تراسی خصوصی در اختیار دارد و سه اتاق خواب دیگر بههمراه مهمانسرایی جداگانه، ریتمی آسان برای زندگی خانوادگی و آخر هفتههای طولانی میسازند.',
    ],
    features: [
      'شیشههای تمامقد رو به دریاچه',
      'استخر با لبه بینهایت و تراس آفتاب',
      'آتریوم ورودی دوطبقه',
      'آشپزخانه حرفهای با پشتی آشپزخانه',
      'بال اصلی با تراس خصوصی',
      'مهمانسرای جداگانه',
    ],
    amenities: [
      'استخر بینهایت',
      'اسکله خصوصی قایق',
      'سینمای خانگی',
      'اتاق شراب',
      'گرمایش از کف',
      'کنترل هوشمند خانه',
      'پارکینگ دو خودرو و سایهبان',
      'حیاط محوطهسازیشده',
    ],
    agentId: 'olivia-carter',
    images: [
      image('/images/estate-02.jpg', 'نمای شیشهای ویلای مدرن کنار دریاچه با بازتاب در آب'),
      image('/images/estate-13.jpg', 'نشیمن باز با شیشههای سرتاسری'),
      image('/images/estate-19.jpg', 'آشپزخانه با جزیره سنگی و کابینتهای توکار'),
      image('/images/estate-21.jpg', 'اتاق خواب اصلی رو به تراس خصوصی'),
      image('/images/estate-17.jpg', 'سرویس بهداشتی با سنگ و چوب گرم'),
    ],
  },
  {
    id: 'prop-002',
    slug: 'pacific-glass-house',
    name: 'خانه شیشههای پاسیفیک',
    city: 'ملیبو',
    region: 'کالیفرنیا',
    country: 'آمریکا',
    location: 'ملیبو، کالیفرنیا، آمریکا',
    price: 4_800_000,
    type: 'اقامتگاه ساحلی',
    status: 'برای فروش',
    beds: 6,
    baths: 7,
    sqft: 7850,
    lotAcres: 0.9,
    yearBuilt: 2019,
    parking: 4,
    featured: true,
    summary: 'پاویونی شیشهای و طرهدار بر فراز اقیانوس آرام، با چشمانداز بیوقفه آب از همه اتاقهای اصلی.',
    description: [
      'خانه شیشههای پاسیفیک از چند حجم طرهدار ساخته شده که پلهپله از صخره به سوی اقیانوس پایین میآیند. شیشههای سازهای در قابی برنزی نشستهاند، چنانکه افق تنها اثر هنری خانه به نظر میرسد.',
      'تراسی رو به اقیانوس با استخری گرم تمام عرض پلان را در بر میگیرد و تراز پایین، باشگاه، آبدرمانی و اتاق رسانهای با دسترسی مستقیم به ساحل را جای داده است.',
    ],
    features: [
      'چشمانداز بیوقفه اقیانوس آرام',
      'شیشههای سازهای طرهدار',
      'استخر گرم رو به اقیانوس',
      'دسترسی به ساحل از تراز پایین',
      'تراس تمامعرض',
      'دیوارهای شیشهای با قاب برنزی',
    ],
    amenities: [
      'استخر و آبدرمانی گرم',
      'دسترسی خصوصی به ساحل',
      'باشگاه خانگی',
      'اتاق رسانه',
      'انبار شراب با کنترل دما',
      'پارکینگ چهار خودرو',
      'آشپزخانه فضای باز',
      'سوئیت مهمان',
    ],
    agentId: 'olivia-carter',
    images: [
      image('/images/estate-03.jpg', 'حجمهای شیشهای طرهدار خانه شیشههای پاسیفیک بر فراز اقیانوس'),
      image('/images/estate-20.jpg', 'فضای نشیمن با چشمانداز بیوقفه اقیانوس'),
      image('/images/estate-22.jpg', 'اتاق خواب اصلی با گوشهای شیشهای'),
      image('/images/estate-16.jpg', 'سرویس بهداشتی رو به آب'),
      image('/images/estate-18.jpg', 'آشپزخانه باز با غذاخوری رو به اقیانوس'),
    ],
  },
  {
    id: 'prop-003',
    slug: 'desert-horizon-estate',
    name: 'عمارت افق کویر',
    city: 'اسکاتسدیل',
    region: 'آریزونا',
    country: 'آمریکا',
    location: 'اسکاتسدیل، آریزونا، آمریکا',
    price: 3_150_000,
    type: 'عمارت',
    status: 'برای فروش',
    beds: 5,
    baths: 5,
    sqft: 6100,
    lotAcres: 2.4,
    yearBuilt: 2020,
    parking: 4,
    featured: true,
    summary: 'مدرنیسم کوتاه کویری در خاک کوبیده و شیشه، بازشده به حیاطی خصوصی در لبه دره.',
    description: [
      'عمارت افق کویر کوتاه و چسبیده به یال کوه نشسته است؛ دیوارهای خاک کوبیدهاش خنکای بعدازظهر کویر را نگه میدارند و گوشههای شیشهای، کوههای دور را قاب میگیرند.',
      'حیاطهای سهطرفه به پلان سایه و آرامش میدهند و استخری بلند به درازای تراس جنوبی کشیده شده است.',
    ],
    features: [
      'ساخت با خاک کوبیده و شیشه',
      'سه حیاط سایهدار',
      'استخر بلند شنا',
      'سوئیت اصلی رو به کوه',
      'کارگاه جداگانه',
      'گیاهان بومی کویر',
    ],
    amenities: [
      'استخر شنا',
      'شومینه فضای باز',
      'کارگاه جداگانه',
      'دفتر کار خانگی',
      'پنلهای خورشیدی',
      'پارکینگ چهار خودرو',
      'آشپزخانه فضای باز توکار',
      'جمعآوری آب باران',
    ],
    agentId: 'daniel-morgan',
    images: [
      image('/images/estate-04.jpg', 'دیوارهای کوتاه خاک کوبیده عمارت افق کویر در لبه دره'),
      image('/images/estate-14.jpg', 'نشیمن باز به حیاط سایهدار'),
      image('/images/estate-23.jpg', 'اتاق خواب قابشده با شیشه رو به کوه'),
      image('/images/estate-15.jpg', 'آشپزخانه با سنگ و چوب گرم'),
      image('/images/estate-24.jpg', 'حمام آبدرمانی با چشمانداز حیاط'),
    ],
  },
  {
    id: 'prop-004',
    slug: 'oceanfront-residence',
    name: 'اقامتگاه کرانه اقیانوس',
    city: 'میامی',
    region: 'فلوریدا',
    country: 'آمریکا',
    location: 'میامی، فلوریدا، آمریکا',
    price: 5_200_000,
    type: 'اقامتگاه ساحلی',
    status: 'فهرست جدید',
    beds: 6,
    baths: 8,
    sqft: 8200,
    lotAcres: 0.7,
    yearBuilt: 2022,
    parking: 4,
    featured: true,
    summary: 'اقامتگاهی نو در کرانه آب با اسکله خصوصی، سالنی دوطبقه و تراسی در بام.',
    description: [
      'اقامتگاه کرانه اقیانوس سالنی دوطبقه را با بالی آرامتر برای خانواده همراه کرده است؛ خانهای که هم برای پذیرایی و هم برای زندگی روزمره روی آب کار میکند.',
      'تراس بام با آشپزخانه فضای باز رو به جنوب بر خلیج مینگرد و اسکله خصوصی ظرفیت شناوری شصتپایی را دارد.',
    ],
    features: [
      'سالن دوطبقه',
      'اسکله خصوصی برای شناور ۶۰ پایی',
      'تراس بام با آشپزخانه فضای باز',
      'آسانسور به هر سه تراز',
      'آشپزخانه تابستانی روی تراس استخر',
      'شیشههای مقاوم در برابر ضربه',
    ],
    amenities: [
      'اسکله خصوصی',
      'تراس بام',
      'آسانسور',
      'استخر و آبدرمانی',
      'سینمای خانگی',
      'باشگاه',
      'پارکینگ چهار خودرو',
      'برق اضطراری کل ساختمان',
    ],
    agentId: 'james-wilson',
    images: [
      image('/images/estate-05.jpg', 'نمای ساحلی اقامتگاه کرانه اقیانوس با تراس استخر'),
      image('/images/estate-17.jpg', 'سالن دوطبقه با چشمانداز آب'),
      image('/images/estate-13.jpg', 'اتاق خانوادگی باز به تراس'),
      image('/images/estate-21.jpg', 'سوئیت اصلی با بالکن خصوصی'),
      image('/images/estate-19.jpg', 'آشپزخانه با جزیره سنگی آبشاری'),
    ],
  },
  {
    id: 'prop-005',
    slug: 'modern-hillside-retreat',
    name: 'اقامتگاه مدرن دامنهکوه',
    city: 'لسآنجلس',
    region: 'کالیفرنیا',
    country: 'آمریکا',
    location: 'لسآنجلس، کالیفرنیا، آمریکا',
    price: 3_750_000,
    type: 'ویلا',
    status: 'برای فروش',
    beds: 4,
    baths: 5,
    sqft: 4900,
    lotAcres: 0.6,
    yearBuilt: 2023,
    parking: 2,
    featured: true,
    summary: 'ویلایی روی دامنه از تراسهای روی هم، با چشمانداز دره از هر تراز و حیاطی سرپوشیده برای استخر.',
    description: [
      'اقامتگاه مدرن دامنهکوه از سه تراس روی هم ساخته شده است؛ هر یک از طریق شیشههای کشویی به لبهای پوشیده از گیاه باز میشود که شیب دره را نرم میکند.',
      'حیاط استخر در آرامترین تراز قرار دارد، از خیابان پوشیده و رو به نور عصر.',
    ],
    features: [
      'سه تراس روی هم',
      'چشمانداز دره از هر تراز',
      'حیاط سرپوشیده استخر',
      'دیوارهای شیشهای کشویی',
      'سوئیت اصلی با دوش فضای باز',
      'پارکینگ دو خودرو با انبار',
    ],
    amenities: [
      'استخر و آبدرمانی',
      'دوش فضای باز',
      'تراس آتشدان',
      'دفتر کار خانگی',
      'یخچال شراب',
      'شارژ خودرو برقی',
      'گیاهان کمآب',
      'سیستم امنیتی',
    ],
    agentId: 'sophia-bennett',
    images: [
      image('/images/estate-06.jpg', 'تراسهای روی هم اقامتگاه مدرن دامنهکوه بالای دره'),
      image('/images/estate-20.jpg', 'فضای نشیمن با شیشه کشویی به تراس'),
      image('/images/estate-16.jpg', 'سرویس اصلی با سنگ'),
      image('/images/estate-14.jpg', 'فضای غذاخوری با چشمانداز دره'),
      image('/images/estate-23.jpg', 'اتاق خواب مهمان باز به باغ'),
    ],
  },
  {
    id: 'prop-006',
    slug: 'palm-garden-residence',
    name: 'اقامتگاه باغ نخل',
    city: 'بورلی هیلز',
    region: 'کالیفرنیا',
    country: 'آمریکا',
    location: 'بورلی هیلز، کالیفرنیا، آمریکا',
    price: 6_400_000,
    type: 'عمارت',
    status: 'فروش خصوصی',
    beds: 7,
    baths: 9,
    sqft: 9300,
    lotAcres: 1.6,
    yearBuilt: 2018,
    parking: 5,
    featured: true,
    summary: 'عمارتی دروازهدار گرد حیاطی از نخلهای کهنسال، با مهمانسرا و باغی رسمی.',
    description: [
      'اقامتگاه باغ نخل گرد حیاطی کهنسال چیده شده است؛ اتاقهای اصلی به باغی رسمی و چمنی قابشده با پرچین باز میشوند.',
      'مهمانسرای جداگانه، اتاق نمایش فیلم و اتاق کارکنان، عمارتی را کامل میکنند که برای مالکیت بلندمدت خانوادگی طراحی شده است.',
    ],
    features: [
      'حیاط نخل با دروازه',
      'باغ رسمی و چمن',
      'مهمانسرای جداگانه',
      'اتاق نمایش فیلم',
      'کتابخانه',
      'اتاق کارکنان',
    ],
    amenities: [
      'استخر و آبدرمانی',
      'مهمانسرا',
      'اتاق نمایش فیلم',
      'باشگاه و سونا',
      'پارکینگ پنج خودرو',
      'هوشمندسازی کامل خانه',
      'آشپزخانه تابستانی',
      'محوطه گردش خودرو',
    ],
    agentId: 'daniel-morgan',
    images: [
      image('/images/estate-07.jpg', 'اقامتگاه باغ نخل در میان گیاهان کهنسال'),
      image('/images/estate-15.jpg', 'نشیمن رسمی باز به باغ'),
      image('/images/estate-19.jpg', 'آشپزخانه با جزیره مرمر'),
      image('/images/estate-22.jpg', 'سوئیت اصلی با چشمانداز باغ'),
      image('/images/estate-18.jpg', 'اتاق صبحانه کنار حیاط'),
    ],
  },
  {
    id: 'prop-007',
    slug: 'contemporary-lake-house',
    name: 'خانه مدرن دریاچه',
    city: 'دریاچه تاهو',
    region: 'نوادا',
    country: 'آمریکا',
    location: 'دریاچه تاهو، نوادا، آمریکا',
    price: 2_950_000,
    type: 'خانه',
    status: 'برای فروش',
    beds: 4,
    baths: 4,
    sqft: 4150,
    lotAcres: 0.8,
    yearBuilt: 2021,
    parking: 3,
    featured: false,
    summary: 'خانهای از چوب و شیشه کنار دریاچه با اسکله قایق، ساختهشده برای زمستانهای طولانی و تابستانهای کوتاه.',
    description: [
      'خانه مدرن دریاچه با چوب سوخته و شیشه پوشیده شده است؛ شومینهای دوطرفه در مرکز آن نشسته و از تراز زندگی، دریاچه دیده میشود.',
      'تراس گرم، ورودی گلآلود و انبار اسکی، خانه را در تمام فصل زمستان واقعاً قابل استفاده میکنند.',
    ],
    features: [
      'نمای چوب سوخته و شیشه',
      'شومینه دوطرفه',
      'اسکله خصوصی قایق',
      'تراس گرم',
      'انبار اسکی و ورودی گلآلود',
      'کف گرمایش تابشی در کل خانه',
    ],
    amenities: [
      'اسکله قایق',
      'تراس گرم',
      'انبار اسکی',
      'گرمایش تابشی',
      'جکوزی',
      'پارکینگ سه خودرو',
      'برق اضطراری',
      'ترموستات هوشمند',
    ],
    agentId: 'olivia-carter',
    images: [
      image('/images/estate-08.jpg', 'نمای چوب و شیشه خانه مدرن دریاچه'),
      image('/images/estate-21.jpg', 'نشیمن با شومینهای دوطرفه'),
      image('/images/estate-17.jpg', 'اتاق خواب زیر سقف چوبی'),
      image('/images/estate-24.jpg', 'سرویس بهداشتی با چشمانداز دریاچه'),
      image('/images/estate-13.jpg', 'غذاخوری و آشپزخانه باز'),
    ],
  },
  {
    id: 'prop-008',
    slug: 'architectural-downtown-penthouse',
    name: 'پنتهاوس معمارانه مرکز شهر',
    city: 'آستین',
    region: 'تگزاس',
    country: 'آمریکا',
    location: 'آستین، تگزاس، آمریکا',
    price: 1_850_000,
    type: 'پنتهاوس',
    status: 'فهرست جدید',
    beds: 3,
    baths: 3,
    sqft: 2680,
    lotAcres: 0,
    yearBuilt: 2024,
    parking: 2,
    featured: false,
    summary: 'پنتهاوسی گوشهای با تراسی دورپیچ بالای خط آسمان شهر.',
    description: [
      'این پنتهاوس طبقه بالای برجی کوچک را در اختیار دارد و تراسش را روی سه جهت میپیچاند؛ هم طلوع و هم غروب در پلان حاضرند.',
      'فضای داخلی خویشتندار است: کف چوب بلوط روشن، سرویسهای سنگی و آشپزخانهای که گرد یک بلوک مرمر طراحی شده است.',
    ],
    features: [
      'تراس دورپیچ',
      'شیشههای گوشهای در سه جهت',
      'دسترسی با آسانسور خصوصی',
      'کانسیرج و خدمات خودرو',
      'دو جای پارک امن',
      'انبار در همان طبقه',
    ],
    amenities: [
      'لابی آسانسور خصوصی',
      'کانسیرج',
      'استخر ساکنان',
      'سالن ورزشی',
      'انبار شراب',
      'دو جای پارک',
      'آشپزخانه تراس',
      'نورپردازی هوشمند',
    ],
    agentId: 'james-wilson',
    images: [
      image('/images/estate-09.jpg', 'شیشههای گوشهای پنتهاوس بالای خط آسمان شهر'),
      image('/images/estate-18.jpg', 'فضای نشیمن با شیشههای دورپیچ'),
      image('/images/estate-23.jpg', 'اتاق خواب اصلی با چشمانداز خط آسمان'),
      image('/images/estate-16.jpg', 'سرویس بهداشتی سنگی'),
      image('/images/estate-20.jpg', 'آشپزخانه با جزیره مرمر'),
    ],
  },
  {
    id: 'prop-009',
    slug: 'canyon-ridge-villa',
    name: 'ویلای یال دره',
    city: 'پارادایسولی',
    region: 'آریزونا',
    country: 'آمریکا',
    location: 'پارادایسولی، آریزونا، آمریکا',
    price: 4_250_000,
    type: 'ویلا',
    status: 'برای فروش',
    beds: 5,
    baths: 6,
    sqft: 6700,
    lotAcres: 3.1,
    yearBuilt: 2022,
    parking: 4,
    featured: false,
    summary: 'ویلایی تکطبقه روی یال کوه، با استخری ۲۵ متری و چشمانداز بیوقفه کویر.',
    description: [
      'ویلای یال دره یک تراز کامل روی یال کوه را در اختیار دارد؛ هر اتاق به دشت کویر مینگرد، نه به همسایه.',
      'استخری ۲۵ متری در لبه غربی کشیده شده و برای آخرین ساعت نور جای گرفته است.',
    ],
    features: [
      'پلان تکطبقه',
      'استخر شنا ۲۵ متری',
      'چشمانداز بیوقفه کویر',
      'شیشههای سرتاسری',
      'بال مهمان',
      'محوطه گردش خودرو',
    ],
    amenities: [
      'استخر ۲۵ متری',
      'آبدرمانی',
      'بال مهمان',
      'باشگاه خانگی',
      'آشپزخانه فضای باز',
      'پارکینگ چهار خودرو',
      'خورشیدی و ذخیره باتری',
      'تراس آتشدان',
    ],
    agentId: 'sophia-bennett',
    images: [
      image('/images/estate-10.jpg', 'ویلای تکطبقه در امتداد یال کوه'),
      image('/images/estate-14.jpg', 'نشیمن با چشمانداز کویر'),
      image('/images/estate-19.jpg', 'آشپزخانه با لوازم توکار'),
      image('/images/estate-22.jpg', 'سوئیت اصلی با دسترسی به تراس'),
      image('/images/estate-15.jpg', 'اتاق خواب مهمان در رنگهای گرم'),
    ],
  },
  {
    id: 'prop-010',
    slug: 'harbourline-townhouse',
    name: 'تاونهاوس کرانه بندر',
    city: 'سیاتل',
    region: 'واشینگتن',
    country: 'آمریکا',
    location: 'سیاتل، واشینگتن، آمریکا',
    price: 2_600_000,
    type: 'تاونهاوس',
    status: 'برای فروش',
    beds: 4,
    baths: 4,
    sqft: 3900,
    lotAcres: 0.2,
    yearBuilt: 2020,
    parking: 2,
    featured: false,
    summary: 'تاونهاوسی چهارطبقه در کرانه آب، با باغی در بام رو به بندر.',
    description: [
      'تاونهاوس کرانه بندر از چهار تراز خود خوب استفاده میکند: پارکینگ و تأسیسات در تراز خیابان، نشیمن و آشپزخانه بالای آن، اتاقهای خواب در طبقه سوم و باغ بام در بالا.',
      'شیشههای سمت بندر تمامقد هستند، چنانکه آب از جزیره آشپزخانه تا پاگرد پله دیده میشود.',
    ],
    features: [
      'چهار تراز با آسانسور خصوصی',
      'باغ بام رو به بندر',
      'شیشههای تمامقد رو به بندر',
      'تأسیسات و انبار در طبقه همکف',
      'پارکینگ دو خودرو',
      'پمپ حرارتی هوا-آب',
    ],
    amenities: [
      'باغ بام',
      'آسانسور خصوصی',
      'پارکینگ دو خودرو',
      'دفتر کار خانگی',
      'تأسیسات و انبار',
      'پمپ حرارتی',
      'شارژ خودرو برقی',
      'پرده هوشمند',
    ],
    agentId: 'daniel-morgan',
    images: [
      image('/images/estate-12.jpg', 'تاونهاوس کرانه آب با باغی در بام'),
      image('/images/estate-13.jpg', 'تراز نشیمن با شیشههای رو به بندر'),
      image('/images/estate-21.jpg', 'اتاق خواب در طبقه بالا'),
      image('/images/estate-24.jpg', 'سرویس بهداشتی با سنگ و چوب'),
      image('/images/estate-17.jpg', 'آشپزخانه با چشمانداز آب'),
    ],
  },
]

/** `۲.۳۵ میلیون دلار` style label, matching the reference design. */
export function formatPrice(price: number): string {
  if (price >= 1_000_000) {
    const millions = price / 1_000_000
    const label = millions.toFixed(2).replace(/0+$/, '').replace(/\.$/, '')
    return `${Number(label).toLocaleString('fa-IR')} میلیون دلار`
  }
  return `${price.toLocaleString('fa-IR')} دلار`
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((property) => property.slug === slug)
}

export function getSimilarProperties(property: Property, limit = 3): Property[] {
  const byType = PROPERTIES.filter((item) => item.id !== property.id && item.type === property.type)
  const byRegion = PROPERTIES.filter(
    (item) => item.id !== property.id && item.region === property.region && item.type !== property.type,
  )
  const rest = PROPERTIES.filter(
    (item) => item.id !== property.id && !byType.includes(item) && !byRegion.includes(item),
  )
  return [...byType, ...byRegion, ...rest].slice(0, limit)
}

export const FEATURED_PROPERTIES: Property[] = PROPERTIES.filter((property) => property.featured)

export const PROPERTY_TYPES: PropertyType[] = Array.from(
  new Set(PROPERTIES.map((property) => property.type)),
).sort()

export const PROPERTY_LOCATIONS: string[] = Array.from(
  new Set(PROPERTIES.map((property) => `${property.city}، ${property.region}`)),
).sort()
