import { Category } from '../../models/Category.ts'
import { Operation } from '../../models/Operation.ts'

export const deleteCategory = async (userId: string, id: string) => {
  const category = await Category.findOne({ _id: id, userId })
  if (!category) return 'not-found' as const

  const isUsed = await Operation.exists({ userId, categoryId: category._id })
  if (isUsed) return 'in-use' as const

  const deleted = await Category.findOneAndDelete({ _id: id, userId })
  return deleted ? 'deleted' as const : 'not-found' as const
}
