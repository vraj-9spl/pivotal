/**
 * Groups an array of items by a key derived from each item.
 */
export const groupBy = <T>(items: T[], keyFn: (item: T) => string): Record<string, T[]> => {
  return items.reduce<Record<string, T[]>>((acc, item) => {
    const key = keyFn(item)
    const group = acc[key] ?? []
    group.push(item)
    acc[key] = group
    return acc
  }, {})
}

/**
 * Removes duplicate items from an array based on a key function.
 */
export const uniqueBy = <T>(items: T[], keyFn: (item: T) => string): T[] => {
  const seen = new Set<string>()
  return items.filter((item) => {
    const key = keyFn(item)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}
