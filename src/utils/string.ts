/**
 * Truncates a string to the given max length, appending ellipsis if truncated.
 */
export const truncate = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str
  return `${str.slice(0, maxLength)}…`
}

/**
 * Capitalizes the first letter of a string.
 */
export const capitalize = (str: string): string => {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Converts a string to a URL-friendly slug.
 */
export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
