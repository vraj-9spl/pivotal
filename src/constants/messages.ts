export const MESSAGES = {
  ERROR: {
    GENERIC: 'Something went wrong. Please try again.',
    NOT_FOUND: 'The requested resource was not found.',
    UNAUTHORIZED: 'You are not authorized to perform this action.',
    NETWORK: 'A network error occurred. Please check your connection.',
  },
  SUCCESS: {
    SAVED: 'Changes saved successfully.',
    DELETED: 'Item deleted successfully.',
  },
} as const
