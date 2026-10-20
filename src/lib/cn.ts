export type ClassValue = string | number | false | null | undefined

/** Joins conditional class names without pulling in an extra dependency. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ')
}
