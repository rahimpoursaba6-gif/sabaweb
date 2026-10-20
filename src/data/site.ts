/**
 * Brand-level content: navigation, contact details, section copy and the shared
 * architectural image pool. Property records live in `properties.ts`.
 */

export type NavLink = { label: string; to: string }

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

export const CONTACT = {
  phoneLabel: '(555) 246-7890',
  phoneHref: 'tel:+15552467890',
  email: 'hello@horizonproperties.com',
  emailHref: 'mailto:hello@horizonproperties.com',
  officeLines: ['Horizon House, 118 Shoreline Drive', 'Austin, Texas 78701'],
  hours: 'Mon – Fri · 9:00 – 18:00',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
  ],
}

export const HERO = {
  image: '/images/estate-01.jpg',
  imageAlt: 'Modern glass villa with a lit infinity pool at dusk',
  label: 'Private brokerage · Est. 2008',
  headline: 'Discover Exceptional Homes & Investments',
  description:
    'Premium properties in prime locations. Find your dream home or the perfect investment with confidence.',
}

export const ABOUT = {
  label: 'About Us',
  title: 'Who We Are',
  body: 'At Horizon Properties, we connect people with extraordinary homes and smart investments. Integrity, transparency, and client satisfaction are at the heart of everything we do.',
  secondary:
    'Our advisors represent a curated portfolio of architectural residences, waterfront estates and prime-city investments — each one vetted, valued and presented with care.',
  cta: { label: 'Learn More', to: '/about' },
  images: [
    { src: '/images/estate-03.jpg', alt: 'Contemporary two-storey home with a landscaped courtyard' },
    { src: '/images/estate-07.jpg', alt: 'Luxury residence garden terrace at golden hour' },
  ],
}

export type Service = {
  title: string
  description: string
}

export const SERVICES: Service[] = [
  {
    title: 'Luxury Home Sales',
    description:
      'Discreet representation for architectural homes, waterfront estates and one-of-a-kind residences.',
  },
  {
    title: 'Property Investment',
    description:
      'Yield analysis, portfolio structuring and acquisition strategy for private and institutional buyers.',
  },
  {
    title: 'Property Marketing',
    description:
      'Editorial photography, film and targeted campaigns that place a residence in front of qualified buyers.',
  },
  {
    title: 'Real Estate Advisory',
    description:
      'Independent counsel on timing, pricing and negotiation — before, during and after a transaction.',
  },
  {
    title: 'Property Valuation',
    description:
      'Evidence-based valuations built on comparable sales, market data and on-site inspection.',
  },
  {
    title: 'Relocation Services',
    description:
      'End-to-end support for international buyers: search, diligence, legal coordination and settling in.',
  },
]

export const WHY_CHOOSE = {
  label: 'Why Choose Horizon',
  title: 'Quietly rigorous, from first viewing to closing',
  description:
    'A boutique team that treats every acquisition as an architectural decision as much as a financial one.',
  pillars: [
    {
      title: 'Off-market access',
      description: 'A private network of owners and developers before a residence ever reaches the market.',
    },
    {
      title: 'Evidence-led valuation',
      description: 'Comparable sales, inspection and market data behind every price we recommend.',
    },
    {
      title: 'One advisor, end to end',
      description: 'The person who shows you the home negotiates it, and stays for the years after.',
    },
    {
      title: 'Global buyer network',
      description: 'Qualified buyers across 32 markets, with multilingual advisory for cross-border moves.',
    },
  ],
  stats: [
    { value: '18', label: 'Years advising' },
    { value: '480+', label: 'Residences placed' },
    { value: '96%', label: 'Client satisfaction' },
    { value: '32', label: 'Markets covered' },
  ],
  image: '/images/estate-11.jpg',
  imageAlt: 'Glass-walled residence reflecting its landscaped surroundings',
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
    name: 'Daniel Morgan',
    role: 'Managing Director',
    image: '/images/team-1.jpg',
    email: 'daniel.morgan@horizonproperties.com',
    phone: '(555) 246-7891',
    phoneHref: 'tel:+15552467891',
    focus: 'Prime-city estates',
    bio: 'Daniel founded Horizon Properties in 2008 and leads the firm’s private-client practice, negotiating the majority of its off-market transactions.',
  },
  {
    id: 'olivia-carter',
    name: 'Olivia Carter',
    role: 'Luxury Property Advisor',
    image: '/images/team-2.jpg',
    email: 'olivia.carter@horizonproperties.com',
    phone: '(555) 246-7892',
    phoneHref: 'tel:+15552467892',
    focus: 'Waterfront & architect-designed homes',
    bio: 'Olivia represents architectural and waterfront residences, pairing editorial marketing with a closely managed buyer list.',
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    role: 'Investment Consultant',
    image: '/images/team-3.jpg',
    email: 'james.wilson@horizonproperties.com',
    phone: '(555) 246-7893',
    phoneHref: 'tel:+15552467893',
    focus: 'Yield & portfolio strategy',
    bio: 'James advises private and institutional investors on acquisition, yield modelling and long-term portfolio structure.',
  },
  {
    id: 'sophia-bennett',
    name: 'Sophia Bennett',
    role: 'Senior Property Specialist',
    image: '/images/team-4.jpg',
    email: 'sophia.bennett@horizonproperties.com',
    phone: '(555) 246-7894',
    phoneHref: 'tel:+15552467894',
    focus: 'Relocation & international buyers',
    bio: 'Sophia guides international buyers through search, diligence and relocation, coordinating legal and financial partners in each market.',
  },
]

export const CTA_BANNER = {
  headline: 'Ready to Find Your Perfect Property?',
  description: 'Let our experts guide you to the right home or investment.',
  button: { label: 'Get in Touch', to: '/contact' },
}
