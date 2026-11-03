import type { User } from '../../models/User.ts'

export const mapUser = (user: InstanceType<typeof User>) => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
    }
}
