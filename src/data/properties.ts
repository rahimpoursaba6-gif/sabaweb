/**
 * Property records.
 *
 * The shape is deliberately database-ready: one flat record per residence with a
 * string id, scalar search fields (price, beds, baths, type, location) and an
 * ordered image list. Swapping this module for an API/DB call later means
 * returning the same `Property` shape from a loader — no component changes.
 */

export type PropertyType =
  | 'Villa'
  | 'Estate'
  | 'Waterfront Residence'
  | 'House'
  | 'Penthouse'
  | 'Townhouse'

export type PropertyStatus = 'For sale' | 'New listing' | 'Private sale'

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
    name: 'Lakeside Modern Villa',
    city: 'Austin',
    region: 'Texas',
    country: 'USA',
    location: 'Austin, Texas, USA',
    price: 2_350_000,
    type: 'Villa',
    status: 'For sale',
    beds: 5,
    baths: 6,
    sqft: 6420,
    lotAcres: 1.2,
    yearBuilt: 2021,
    parking: 3,
    featured: true,
    summary: 'A glass-fronted villa on the water, built around a sheltered courtyard and a lake-facing pool deck.',
    description: [
      'Set on a quiet stretch of shoreline, Lakeside Modern Villa opens through a full-height glass spine that carries the living spaces straight out to the water. Concrete, oak and bronze detailing keep the palette warm against the changing lake light.',
      'The primary suite occupies its own wing with a private terrace, while three further bedrooms and a guest casita give the house an easy rhythm for family life and long weekends alike.',
    ],
    features: [
      'Full-height glazing to the lake',
      'Infinity-edge pool and sun deck',
      'Two-storey entrance atrium',
      'Chef’s kitchen with butler’s pantry',
      'Primary wing with private terrace',
      'Detached guest casita',
    ],
    amenities: [
      'Infinity pool',
      'Private boat dock',
      'Home cinema',
      'Wine room',
      'Underfloor heating',
      'Smart home control',
      'Double garage plus carport',
      'Landscaped courtyard',
    ],
    agentId: 'olivia-carter',
    images: [
      image('/images/estate-02.jpg', 'Glass frontage of Lakeside Modern Villa reflected in the water'),
      image('/images/estate-13.jpg', 'Open plan living room with floor-to-ceiling glazing'),
      image('/images/estate-19.jpg', 'Kitchen with stone island and integrated cabinetry'),
      image('/images/estate-21.jpg', 'Primary bedroom opening onto a private terrace'),
      image('/images/estate-17.jpg', 'Bathroom in stone and warm timber'),
    ],
  },
  {
    id: 'prop-002',
    slug: 'pacific-glass-house',
    name: 'Pacific Glass House',
    city: 'Malibu',
    region: 'California',
    country: 'USA',
    location: 'Malibu, California, USA',
    price: 4_800_000,
    type: 'Waterfront Residence',
    status: 'For sale',
    beds: 6,
    baths: 7,
    sqft: 7850,
    lotAcres: 0.9,
    yearBuilt: 2019,
    parking: 4,
    featured: true,
    summary: 'A cantilevered glass pavilion above the Pacific, with unbroken ocean views from every principal room.',
    description: [
      'Pacific Glass House is arranged as a series of cantilevered volumes that step down the bluff toward the ocean. Structural glazing is set within a bronze frame, so the horizon reads as the only artwork in the house.',
      'An ocean-side terrace with a heated pool runs the full width of the plan, and a lower level holds a gym, spa and media room with direct beach access.',
    ],
    features: [
      'Unobstructed Pacific views',
      'Cantilevered structural glazing',
      'Heated ocean-side pool',
      'Beach access from the lower level',
      'Full-width terrace',
      'Bronze-framed window walls',
    ],
    amenities: [
      'Heated pool and spa',
      'Private beach access',
      'Home gym',
      'Media room',
      'Climate-controlled wine cellar',
      'Four-car garage',
      'Outdoor kitchen',
      'Guest suite',
    ],
    agentId: 'olivia-carter',
    images: [
      image('/images/estate-03.jpg', 'Cantilevered glass volumes of Pacific Glass House above the ocean'),
      image('/images/estate-20.jpg', 'Living space with uninterrupted ocean views'),
      image('/images/estate-22.jpg', 'Principal bedroom with a glazed corner'),
      image('/images/estate-16.jpg', 'Bathroom overlooking the water'),
      image('/images/estate-18.jpg', 'Open plan kitchen with ocean-side dining'),
    ],
  },
  {
    id: 'prop-003',
    slug: 'desert-horizon-estate',
    name: 'Desert Horizon Estate',
    city: 'Scottsdale',
    region: 'Arizona',
    country: 'USA',
    location: 'Scottsdale, Arizona, USA',
    price: 3_150_000,
    type: 'Estate',
    status: 'For sale',
    beds: 5,
    baths: 5,
    sqft: 6100,
    lotAcres: 2.4,
    yearBuilt: 2020,
    parking: 4,
    featured: true,
    summary: 'Low-slung desert modernism in rammed earth and glass, opening onto a private canyon courtyard.',
    description: [
      'Desert Horizon Estate sits low against the ridge, its rammed-earth walls holding cool through the desert afternoon while glass corners frame the mountains beyond.',
      'Courtyards on three sides give the plan its shade and its calm, and a long lap pool runs the length of the southern terrace.',
    ],
    features: [
      'Rammed-earth and glass construction',
      'Three shaded courtyards',
      'Long lap pool',
      'Mountain-facing primary suite',
      'Detached studio',
      'Desert-native planting',
    ],
    amenities: [
      'Lap pool',
      'Outdoor fireplace',
      'Detached studio',
      'Home office',
      'Solar array',
      'Four-car garage',
      'Built-in outdoor kitchen',
      'Rainwater harvesting',
    ],
    agentId: 'daniel-morgan',
    images: [
      image('/images/estate-04.jpg', 'Low rammed-earth walls of Desert Horizon Estate at the canyon edge'),
      image('/images/estate-14.jpg', 'Living room opening onto a shaded courtyard'),
      image('/images/estate-23.jpg', 'Bedroom framed by glass to the mountains'),
      image('/images/estate-15.jpg', 'Kitchen in stone and warm timber'),
      image('/images/estate-24.jpg', 'Spa bathroom with a courtyard view'),
    ],
  },
  {
    id: 'prop-004',
    slug: 'oceanfront-residence',
    name: 'Oceanfront Residence',
    city: 'Miami',
    region: 'Florida',
    country: 'USA',
    location: 'Miami, Florida, USA',
    price: 5_200_000,
    type: 'Waterfront Residence',
    status: 'New listing',
    beds: 6,
    baths: 8,
    sqft: 8200,
    lotAcres: 0.7,
    yearBuilt: 2022,
    parking: 4,
    featured: true,
    summary: 'A new waterfront residence with a private dock, double-height salon and a rooftop terrace.',
    description: [
      'Oceanfront Residence pairs a double-height salon with a quieter family wing, so the house works as well for entertaining as it does for everyday life on the water.',
      'A rooftop terrace with an outdoor kitchen looks south over the bay, and the private dock takes a 60-foot vessel.',
    ],
    features: [
      'Double-height salon',
      'Private dock for a 60-foot vessel',
      'Rooftop terrace with outdoor kitchen',
      'Elevator to all three levels',
      'Summer kitchen on the pool deck',
      'Impact-rated glazing throughout',
    ],
    amenities: [
      'Private dock',
      'Rooftop terrace',
      'Elevator',
      'Pool and spa',
      'Home cinema',
      'Gym',
      'Four-car garage',
      'Whole-house generator',
    ],
    agentId: 'james-wilson',
    images: [
      image('/images/estate-05.jpg', 'Waterfront facade of Oceanfront Residence with its pool deck'),
      image('/images/estate-17.jpg', 'Double-height salon with water views'),
      image('/images/estate-13.jpg', 'Family room opening to the terrace'),
      image('/images/estate-21.jpg', 'Principal suite with a private balcony'),
      image('/images/estate-19.jpg', 'Kitchen with waterfall stone island'),
    ],
  },
  {
    id: 'prop-005',
    slug: 'modern-hillside-retreat',
    name: 'Modern Hillside Retreat',
    city: 'Los Angeles',
    region: 'California',
    country: 'USA',
    location: 'Los Angeles, California, USA',
    price: 3_750_000,
    type: 'Villa',
    status: 'For sale',
    beds: 4,
    baths: 5,
    sqft: 4900,
    lotAcres: 0.6,
    yearBuilt: 2023,
    parking: 2,
    featured: true,
    summary: 'A hillside villa of stacked terraces, with canyon views from every level and a sheltered pool court.',
    description: [
      'Modern Hillside Retreat is built as three stacked terraces, each opening through sliding glass to a planted edge that softens the drop down the canyon.',
      'The pool court sits at the quietest level, screened from the street and oriented to the evening light.',
    ],
    features: [
      'Three stacked terraces',
      'Canyon views from every level',
      'Sheltered pool court',
      'Sliding glass walls',
      'Primary suite with outdoor shower',
      'Two-car garage with storage',
    ],
    amenities: [
      'Pool and spa',
      'Outdoor shower',
      'Fire pit terrace',
      'Home office',
      'Wine fridge',
      'EV charging',
      'Drought-tolerant planting',
      'Security system',
    ],
    agentId: 'sophia-bennett',
    images: [
      image('/images/estate-06.jpg', 'Stacked terraces of Modern Hillside Retreat above the canyon'),
      image('/images/estate-20.jpg', 'Living space with sliding glass to the terrace'),
      image('/images/estate-16.jpg', 'Principal bathroom in stone'),
      image('/images/estate-14.jpg', 'Dining area with canyon views'),
      image('/images/estate-23.jpg', 'Guest bedroom opening to the garden'),
    ],
  },
  {
    id: 'prop-006',
    slug: 'palm-garden-residence',
    name: 'Palm Garden Residence',
    city: 'Beverly Hills',
    region: 'California',
    country: 'USA',
    location: 'Beverly Hills, California, USA',
    price: 6_400_000,
    type: 'Estate',
    status: 'Private sale',
    beds: 7,
    baths: 9,
    sqft: 9300,
    lotAcres: 1.6,
    yearBuilt: 2018,
    parking: 5,
    featured: true,
    summary: 'A gated estate around a mature palm courtyard, with a guest house and a formal garden.',
    description: [
      'Palm Garden Residence is arranged around a mature courtyard, with the principal rooms opening to a formal garden and a lawn framed by hedges.',
      'A separate guest house, a screening room and staff quarters complete an estate designed for long-term family ownership.',
    ],
    features: [
      'Gated palm courtyard',
      'Formal garden and lawn',
      'Detached guest house',
      'Screening room',
      'Library',
      'Staff quarters',
    ],
    amenities: [
      'Pool and spa',
      'Guest house',
      'Screening room',
      'Gym and sauna',
      'Five-car garage',
      'Full house automation',
      'Summer kitchen',
      'Motor court',
    ],
    agentId: 'daniel-morgan',
    images: [
      image('/images/estate-07.jpg', 'Palm Garden Residence framed by mature planting'),
      image('/images/estate-15.jpg', 'Formal living room opening to the garden'),
      image('/images/estate-19.jpg', 'Kitchen with marble island'),
      image('/images/estate-22.jpg', 'Principal suite with garden outlook'),
      image('/images/estate-18.jpg', 'Breakfast room beside the courtyard'),
    ],
  },
  {
    id: 'prop-007',
    slug: 'contemporary-lake-house',
    name: 'Contemporary Lake House',
    city: 'Lake Tahoe',
    region: 'Nevada',
    country: 'USA',
    location: 'Lake Tahoe, Nevada, USA',
    price: 2_950_000,
    type: 'House',
    status: 'For sale',
    beds: 4,
    baths: 4,
    sqft: 4150,
    lotAcres: 0.8,
    yearBuilt: 2021,
    parking: 3,
    featured: false,
    summary: 'A timber and glass lake house with a boat dock, designed for long winters and short summers.',
    description: [
      'Contemporary Lake House is clad in charred timber and glass, with a double-sided fireplace at its centre and lake views from the living level.',
      'A heated terrace, mudroom and ski store make the house genuinely usable through the winter season.',
    ],
    features: [
      'Charred timber and glass facade',
      'Double-sided fireplace',
      'Private boat dock',
      'Heated terrace',
      'Ski store and mudroom',
      'Radiant floors throughout',
    ],
    amenities: [
      'Boat dock',
      'Heated terrace',
      'Ski store',
      'Radiant heating',
      'Hot tub',
      'Three-car garage',
      'Generator',
      'Smart thermostats',
    ],
    agentId: 'olivia-carter',
    images: [
      image('/images/estate-08.jpg', 'Timber and glass facade of Contemporary Lake House'),
      image('/images/estate-21.jpg', 'Living room with a double-sided fireplace'),
      image('/images/estate-17.jpg', 'Bedroom under a timber ceiling'),
      image('/images/estate-24.jpg', 'Bathroom with a lake outlook'),
      image('/images/estate-13.jpg', 'Open plan dining and kitchen'),
    ],
  },
  {
    id: 'prop-008',
    slug: 'architectural-downtown-penthouse',
    name: 'Architectural Downtown Penthouse',
    city: 'Austin',
    region: 'Texas',
    country: 'USA',
    location: 'Austin, Texas, USA',
    price: 1_850_000,
    type: 'Penthouse',
    status: 'New listing',
    beds: 3,
    baths: 3,
    sqft: 2680,
    lotAcres: 0,
    yearBuilt: 2024,
    parking: 2,
    featured: false,
    summary: 'A corner penthouse with a wraparound terrace above the city skyline.',
    description: [
      'Occupying the top floor of a boutique tower, this penthouse wraps its terrace around three aspects so both sunrise and sunset are on the plan.',
      'Interiors are restrained: pale oak floors, stone bathrooms and a kitchen designed around a single block of marble.',
    ],
    features: [
      'Wraparound terrace',
      'Corner glazing on three aspects',
      'Private lift access',
      'Concierge and valet',
      'Two secure parking bays',
      'Storage room on the same floor',
    ],
    amenities: [
      'Private lift lobby',
      'Concierge',
      'Residents’ pool',
      'Fitness studio',
      'Wine storage',
      'Two parking bays',
      'Terrace kitchen',
      'Smart lighting',
    ],
    agentId: 'james-wilson',
    images: [
      image('/images/estate-09.jpg', 'Corner penthouse glazing above the city skyline'),
      image('/images/estate-18.jpg', 'Living space with wraparound glazing'),
      image('/images/estate-23.jpg', 'Principal bedroom with skyline views'),
      image('/images/estate-16.jpg', 'Stone bathroom'),
      image('/images/estate-20.jpg', 'Kitchen with a marble island'),
    ],
  },
  {
    id: 'prop-009',
    slug: 'canyon-ridge-villa',
    name: 'Canyon Ridge Villa',
    city: 'Paradise Valley',
    region: 'Arizona',
    country: 'USA',
    location: 'Paradise Valley, Arizona, USA',
    price: 4_250_000,
    type: 'Villa',
    status: 'For sale',
    beds: 5,
    baths: 6,
    sqft: 6700,
    lotAcres: 3.1,
    yearBuilt: 2022,
    parking: 4,
    featured: false,
    summary: 'A single-level villa on a ridge line, with a 25-metre pool and uninterrupted desert views.',
    description: [
      'Canyon Ridge Villa holds a single level across its ridge, so every room looks out over the desert floor rather than into a neighbour.',
      'A 25-metre pool runs along the western edge, positioned for the last hour of light.',
    ],
    features: [
      'Single-level plan',
      '25-metre lap pool',
      'Uninterrupted desert views',
      'Floor-to-ceiling glazing',
      'Guest wing',
      'Motor court',
    ],
    amenities: [
      '25-metre pool',
      'Spa',
      'Guest wing',
      'Home gym',
      'Outdoor kitchen',
      'Four-car garage',
      'Solar and battery storage',
      'Fire pit terrace',
    ],
    agentId: 'sophia-bennett',
    images: [
      image('/images/estate-10.jpg', 'Single-level villa along the ridge line'),
      image('/images/estate-14.jpg', 'Living room with desert views'),
      image('/images/estate-19.jpg', 'Kitchen with integrated appliances'),
      image('/images/estate-22.jpg', 'Principal suite with terrace access'),
      image('/images/estate-15.jpg', 'Guest bedroom in warm neutrals'),
    ],
  },
  {
    id: 'prop-010',
    slug: 'harbourline-townhouse',
    name: 'Harbourline Townhouse',
    city: 'Seattle',
    region: 'Washington',
    country: 'USA',
    location: 'Seattle, Washington, USA',
    price: 2_600_000,
    type: 'Townhouse',
    status: 'For sale',
    beds: 4,
    baths: 4,
    sqft: 3900,
    lotAcres: 0.2,
    yearBuilt: 2020,
    parking: 2,
    featured: false,
    summary: 'A four-storey townhouse on the waterfront, with a roof garden looking over the harbour.',
    description: [
      'Harbourline Townhouse uses its four levels well: garage and utility at street level, living and kitchen above, bedrooms on the third floor and a roof garden on top.',
      'Glazing on the harbour side is full height, so the water is visible from the kitchen island through to the stair.',
    ],
    features: [
      'Four levels with a private lift',
      'Roof garden over the harbour',
      'Full-height harbour glazing',
      'Ground-floor utility and store',
      'Two-car garage',
      'Air-source heat pump',
    ],
    amenities: [
      'Roof garden',
      'Private lift',
      'Two-car garage',
      'Home office',
      'Utility and store',
      'Heat pump',
      'EV charging',
      'Smart blinds',
    ],
    agentId: 'daniel-morgan',
    images: [
      image('/images/estate-12.jpg', 'Waterfront townhouse with a roof garden'),
      image('/images/estate-13.jpg', 'Living level with harbour glazing'),
      image('/images/estate-21.jpg', 'Bedroom on the upper floor'),
      image('/images/estate-24.jpg', 'Bathroom in stone and timber'),
      image('/images/estate-17.jpg', 'Kitchen with a view across the water'),
    ],
  },
]

/** `$2.35 Million` style label, matching the reference design. */
export function formatPrice(price: number): string {
  if (price >= 1_000_000) {
    const millions = price / 1_000_000
    const label = millions.toFixed(2).replace(/0+$/, '').replace(/\.$/, '')
    return `$${label} Million`
  }
  return `$${price.toLocaleString('en-US')}`
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
  new Set(PROPERTIES.map((property) => `${property.city}, ${property.region}`)),
).sort()
