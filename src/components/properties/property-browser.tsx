import { useCallback, useEffect, useMemo, useState } from 'react'
import { RotateCcw, Search } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

import { PropertyCard } from '@/components/properties/property-card'
import { Button } from '@/components/ui/button'
import { Field, fieldClassName } from '@/components/ui/field'
import { PROPERTIES } from '@/data/properties'
import {
  BATH_OPTIONS,
  BED_OPTIONS,
  LOCATION_OPTIONS,
  PRICE_BANDS,
  SORT_OPTIONS,
  TYPE_OPTIONS,
  countActiveFilters,
  filterProperties,
  parseFilters,
  toSearchParams,
} from '@/lib/property-filters'
import type { PropertyFilters, SortKey } from '@/lib/property-filters'

/** Filter state lives in the URL, so results are shareable and Back works. */
export function PropertyBrowser() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filters = useMemo(() => parseFilters(searchParams), [searchParams])
  const [queryDraft, setQueryDraft] = useState(filters.query)

  const applyFilters = useCallback(
    (next: PropertyFilters) => {
      setSearchParams(toSearchParams(next), { replace: true })
    },
    [setSearchParams],
  )

  // Reflect URL changes (Clear all, Back, shared links) back into the input.
  useEffect(() => {
    setQueryDraft(filters.query)
  }, [filters.query])

  // Debounce typing so the grid does not thrash while a search is written.
  useEffect(() => {
    const trimmed = queryDraft.trim()
    if (trimmed === filters.query) return

    const timer = window.setTimeout(() => {
      applyFilters({ ...filters, query: trimmed })
    }, 260)

    return () => window.clearTimeout(timer)
  }, [queryDraft, filters, applyFilters])

  const results = useMemo(() => filterProperties(PROPERTIES, filters), [filters])
  const activeCount = countActiveFilters(filters)

  const clearAll = () => setSearchParams(new URLSearchParams(), { replace: true })

  const selectClassName = fieldClassName({ className: 'appearance-none pr-9' })

  return (
    <div>
      <div className="rounded-[12px] border border-ink/10 bg-white p-5 shadow-[0_1px_2px_rgba(11,28,51,0.05)] sm:p-7">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Field id="property-search" label="Search" className="sm:col-span-2 lg:col-span-1">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-graphite/45"
                aria-hidden="true"
              />
              <input
                id="property-search"
                type="search"
                value={queryDraft}
                onChange={(event) => setQueryDraft(event.target.value)}
                placeholder="Name, city or feature"
                className={fieldClassName({ className: 'pl-10' })}
              />
            </div>
          </Field>

          <Field id="filter-location" label="Location">
            <select
              id="filter-location"
              value={filters.location}
              onChange={(event) => applyFilters({ ...filters, location: event.target.value })}
              className={selectClassName}
            >
              <option value="any">All locations</option>
              {LOCATION_OPTIONS.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </Field>

          <Field id="filter-type" label="Property type">
            <select
              id="filter-type"
              value={filters.type}
              onChange={(event) => applyFilters({ ...filters, type: event.target.value })}
              className={selectClassName}
            >
              <option value="any">All types</option>
              {TYPE_OPTIONS.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </Field>

          <Field id="filter-price" label="Price range">
            <select
              id="filter-price"
              value={filters.price}
              onChange={(event) => applyFilters({ ...filters, price: event.target.value })}
              className={selectClassName}
            >
              {PRICE_BANDS.map((band) => (
                <option key={band.id} value={band.id}>
                  {band.label}
                </option>
              ))}
            </select>
          </Field>

          <Field id="filter-beds" label="Bedrooms">
            <select
              id="filter-beds"
              value={filters.beds}
              onChange={(event) => applyFilters({ ...filters, beds: event.target.value })}
              className={selectClassName}
            >
              {BED_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>

          <Field id="filter-baths" label="Bathrooms">
            <select
              id="filter-baths"
              value={filters.baths}
              onChange={(event) => applyFilters({ ...filters, baths: event.target.value })}
              className={selectClassName}
            >
              {BATH_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>

          <Field id="filter-sort" label="Sort by">
            <select
              id="filter-sort"
              value={filters.sort}
              onChange={(event) => applyFilters({ ...filters, sort: event.target.value as SortKey })}
              className={selectClassName}
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-5">
          <p role="status" aria-live="polite" className="text-[13px] text-graphite/75">
            {results.length} of {PROPERTIES.length} properties
          </p>
          {activeCount > 0 ? (
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-navy-900 transition-colors duration-300 hover:text-champagne"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Clear {activeCount} {activeCount === 1 ? 'filter' : 'filters'}
            </button>
          ) : null}
        </div>
      </div>

      {results.length > 0 ? (
        <ul className="mt-12 grid list-none gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((property) => (
            <li key={property.id}>
              <PropertyCard property={property} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-12 rounded-[12px] border border-dashed border-ink/20 bg-ivory px-8 py-16 text-center">
          <h2 className="font-display text-xl font-medium text-ink">No properties match those filters</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-graphite/80">
            Try widening the price range, removing the location, or searching a different feature.
          </p>
          <Button variant="outline" onClick={clearAll} className="mt-8">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  )
}
