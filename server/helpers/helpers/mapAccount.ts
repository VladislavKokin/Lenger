import type { Account } from '../../models/Account.ts'

export const mapAccount = (account: InstanceType<typeof Account>) => ({
  id: account.id,
  name: account.name,
  type: account.type,
  initialBalance: account.initialBalance,
})