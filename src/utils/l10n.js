export function pick(value, locale) {
  if (value == null) return ''
  if (typeof value === 'string') return value
  if (Array.isArray(value)) return value
  return value[locale] ?? value['es'] ?? ''
}

export function pickItems(items, locale) {
  if (!Array.isArray(items)) return []
  return items.map((item) => pick(item, locale))
}
