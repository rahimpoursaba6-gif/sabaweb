import type { Property, PropertyType } from '@/data/properties'
import { PROPERTIES } from '@/data/properties'

export type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'largest'

export type PropertyFilters = {
  query: string
  location: string
  type: string
  price: string
  beds: string
  baths: string
  sort: SortKey
}

export const DEFAULT_FILTERS: PropertyFilters = {
  query: '',
  location: 'any',
  type: 'any',
  price: 'any',
  beds: 'any',
  baths: 'any',
  sort: 'featured',
}

export const PRICE_BANDS = [
  { id: 'any', label: 'Any price', min: 0, max: Number.POSITIVE_INFINITY },
  { id: 'under-2m', label: 'Under $2M', min: 0, max: 2_000_000 },
  { id: '2m-3.5m', label: '$2M – $3.5M', min: 2_000_000, max: 3_500_000 },
  { id: '3.5m-5m', label: '$3.5M – $5M', min: 3_500_000, max: 5_000_000 },
  { id: 'over-5m', label: '$5M and above', min: 5_000_000, max: Number.POSITIVE_INFINITY },
] as const

export const BED_OPTIONS = [
  { id: 'any', label: 'Any' },
  { id: '3', label: '3+' },
  { id: '4', label: '4+' },
  { id: '5', label: '5+' },
  { id: '6', label: '6+' },
] as const

export const BATH_OPTIONS = [
  { id: 'any', label: 'Any' },
  { id: '3', label: '3+' },
  { id: '4', label: '4+' },
  { id: '6', label: '6+' },
  { id: '8', label: '8+' },
] as const

export const SORT_OPTIONS: { id: SortKey; label: string }[] = [
  { id: 'featured', label: 'Featured first' },
  { id: 'price-asc', label: 'Price · low to high' },
  { id: 'price-desc', label: 'Price · high to low' },
  { id: 'newest', label: 'Newest built' },
  { id: 'largest', label: 'Largest first' },
]

export const LOCATION_OPTIONS: string[] = Array.from(
  new Set(PROPERTIES.map((property) => `${property.city}, ${property.region}`)),
).sort()

export const TYPE_OPTIONS: PropertyType[] = Array.from(
  new Set(PROPERTIES.map((property) => property.type)),
).sort()

export function filterProperties(list: Property[], filters: PropertyFilters): Property[] {
  const query = filters.query.trim().toLowerCase()
  const band = PRICE_BANDS.find((item) => item.id === filters.price) ?? PRICE_BANDS[0]
  const minBeds = filters.beds === 'any' ? 0 : Number(filters.beds)
  const minBaths = filters.baths === 'any' ? 0 : Number(filters.baths)

  const matched = list.filter((property) => {
    if (filters.location !== 'any' && `${property.city}, ${property.region}` !== filters.location) return false
    if (filters.type !== 'any' && property.type !== filters.type) return false
    if (property.price < band.min || property.price > band.max) return false
    if (property.beds < minBeds) return false
    if (property.baths < minBaths) return false
    if (!query) return true

    return [
      property.name,
      property.location,
      property.type,
      property.summary,
      property.status,
      ...property.features,
    ]
      .join(' ')
      .toLowerCase()
      .includes(query)
  })

  return sortProperties(matched, filters.sort)
}

function sortProperties(list: Property[], sort: SortKey): Property[] {
  const sorted = [...list]

  switch (sort) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'newest':
      return sorted.sort((a, b) => b.yearBuilt - a.yearBuilt)
    case 'largest':
      return sorted.sort((a, b) => b.sqft - a.sqft)
    case 'featured':
    default:
      return sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || b.price - a.price)
  }
}

export function countActiveFilters(filters: PropertyFilters): number {
  return (
    (filters.query.trim() ? 1 : 0) +
    (filters.location !== 'any' ? 1 : 0) +
    (filters.type !== 'any' ? 1 : 0) +
    (filters.price !== 'any' ? 1 : 0) +
    (filters.beds !== 'any' ? 1 : 0) +
    (filters.baths !== 'any' ? 1 : 0)
  )
}

const SORT_KEYS = SORT_OPTIONS.map((option) => option.id)

/** Filters live in the URL so a search can be shared or revisited with Back. */
export function parseFilters(params: URLSearchParams): PropertyFilters {
  const sortParam = params.get('sort')
  const sort = SORT_KEYS.find((key) => key === sortParam) ?? DEFAULT_FILTERS.sort

  return {
    query: params.get('q') ?? DEFAULT_FILTERS.query,
    location: params.get('location') ?? DEFAULT_FILTERS.location,
    type: params.get('type') ?? DEFAULT_FILTERS.type,
    price: params.get('price') ?? DEFAULT_FILTERS.price,
    beds: params.get('beds') ?? DEFAULT_FILTERS.beds,
    baths: params.get('baths') ?? DEFAULT_FILTERS.baths,
    sort,
  }
}

export function toSearchParams(filters: PropertyFilters): URLSearchParams {
  const params = new URLSearchParams()

  const entries: [string, string, string][] = [
    ['q', filters.query.trim(), DEFAULT_FILTERS.query],
    ['location', filters.location, DEFAULT_FILTERS.location],
    ['type', filters.type, DEFAULT_FILTERS.type],
    ['price', filters.price, DEFAULT_FILTERS.price],
    ['beds', filters.beds, DEFAULT_FILTERS.beds],
    ['baths', filters.baths, DEFAULT_FILTERS.baths],
    ['sort', filters.sort, DEFAULT_FILTERS.sort],
  ]

  for (const [key, value, fallback] of entries) {
    if (value && value !== fallback) params.set(key, value)
  }

  return params
}
