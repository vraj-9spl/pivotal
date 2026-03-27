/**
 * Normalizes unknown caught values into an Error instance.
 */
export const normalizeError = (err: unknown): Error => {
  if (err instanceof Error) return err
  if (typeof err === 'string') return new Error(err)
  return new Error('An unknown error occurred')
}

/**
 * Extracts a user-friendly message from an error.
 */
export const getErrorMessage = (err: unknown): string => {
  return normalizeError(err).message
}
