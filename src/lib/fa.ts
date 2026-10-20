/** Persian digits for every number shown inside Persian copy. */
export function fa(value: number): string {
  return value.toLocaleString('fa-IR')
}

/** Two-digit Persian index (`۰۱`, `۰۲`, …) used by the numbered editorial rows. */
export function faIndex(value: number): string {
  return value.toLocaleString('fa-IR', { minimumIntegerDigits: 2, useGrouping: false })
}

/** ISO date (`2026-10-25`) as a Persian-calendar label (`۳ آبان ۱۴۰۵`). */
export function faDate(isoDate: string): string {
  if (!isoDate) return ''
  const date = new Date(`${isoDate}T12:00:00`)
  return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'long' }).format(date)
}
