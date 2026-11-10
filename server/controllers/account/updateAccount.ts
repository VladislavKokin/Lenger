import { Account } from '../../models/Account.ts'

type UpdateAccountData = {
  name: string
  type: string
  initialBalance: number
}

export const updateAccount = async (
  userId: string,
  id: string,
  data: UpdateAccountData,
) => {
  return Account.findOneAndUpdate(
    { _id: id, userId },
    {
      $set: {
        name: data.name,
        type: data.type,
        initialBalance: data.initialBalance,
      },
    },
    { returnDocument: 'after', runValidators: true },
  )
}