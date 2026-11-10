import { Category } from '../../models/Category.ts'
import { parseCategoryFields } from './categoryFields.ts'

export const updateCategory = (userId: string, id: string, categoryData: unknown) => {
  const fields = parseCategoryFields(categoryData)
  return Category.findOneAndUpdate({ _id: id, userId }, fields, { returnDocument: 'after', runValidators: true })
}
