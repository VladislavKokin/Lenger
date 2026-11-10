import { Account } from '../../models/Account.ts'

type CreateAccountData = {
  name: string
  type: string
  initialBalance?: number
}

export const createAccount = async (
  userId: string,
  data: CreateAccountData,
) => {
  return Account.create({
    userId,
    name: data.name,
    type: data.type,
    initialBalance: data.initialBalance,
  })
}