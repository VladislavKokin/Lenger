import type { User } from '../server/models/User.ts'

export const mapUser = (user: InstanceType<typeof User>) => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
    }
}
