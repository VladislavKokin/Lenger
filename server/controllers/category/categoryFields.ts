const ICONS = new Set([
  'cart', 'bus', 'house', 'home', 'cup', 'film', 'bank', 'card', 'cash', 'wallet',
  'case', 'tag', 'mobile', 'tablet', 'monitor', 'calendar', 'shield', 'history', 'dots',
])
const COLORS = new Set(['blue', 'orange', 'teal', 'amber', 'pink', 'green'])

export const parseCategoryFields = (input: unknown) => {
  const data = input && typeof input === 'object' ? input as Record<string, unknown> : {}
  const name = typeof data.name === 'string' ? data.name.trim() : ''

  if (!name) throw new Error('Введите название')
  if (name.length > 40) throw new Error('Название должно быть не длиннее 40 символов')
  if (typeof data.icon !== 'string' || !ICONS.has(data.icon)) throw new Error('Неверная иконка')
  if (typeof data.color !== 'string' || !COLORS.has(data.color)) throw new Error('Неверный цвет')

  return { name, icon: data.icon, color: data.color }
}
