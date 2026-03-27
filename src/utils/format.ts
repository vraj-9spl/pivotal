import { format, parseISO } from 'date-fns'

/**
 * Formats an ISO date string into a human-readable date.
 * @param isoString - ISO 8601 date string
 * @param pattern - date-fns format pattern (default: 'MMM d, yyyy')
 */
export const formatDate = (isoString: string, pattern = 'MMM d, yyyy'): string => {
  try {
    return format(parseISO(isoString), pattern)
  } catch {
    return 'Invalid date'
  }
}

/**
 * Formats a number as a currency string.
 */
export const formatCurrency = (amount: number, currency = 'USD', locale = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount)
}

/**
 * Formats a number with compact notation (e.g. 1.2K, 3.4M).
 */
export const formatCompact = (value: number, locale = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)
}
