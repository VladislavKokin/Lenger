import { Account } from '../../models/Account.ts'
import { Operation } from '../../models/Operation.ts'

export const deleteAccount = async (
  userId: string,
  id: string,
) => {
  const account = await Account.findOne({ _id: id, userId })

  if (!account) return 'not-found' as const

  const isUsed = await Operation.exists({
    userId,
    accountId: account._id,
  })

  if (isUsed) return 'in-use' as const

  const deleted = await Account.findOneAndDelete({
    _id: id,
    userId,
  })

  return deleted ? 'deleted' as const : 'not-found' as const
}