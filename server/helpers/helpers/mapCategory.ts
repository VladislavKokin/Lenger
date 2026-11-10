import type { Category } from '../../models/Category.ts'

export const mapCategory = (category: InstanceType<typeof Category>) => ({
  id: category.id,
  name: category.name,
  icon: category.icon,
  type: category.type,
  color: category.color,
})
