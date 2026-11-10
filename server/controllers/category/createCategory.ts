import { Category } from '../../models/Category.ts'
import { parseCategoryFields } from './categoryFields.ts'

export const createCategory = async (
  userId: string,
  data: unknown,
) => {
  const fields = parseCategoryFields(data)
  const type = data && typeof data === 'object' && 'type' in data ? data.type : undefined

  if (type !== 'expense' && type !== 'income') throw new Error('Неверный тип категории')

  return Category.create({ userId, ...fields, type })
}
