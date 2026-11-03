import { User } from "../../models/User.ts";

type UpdateUserData = Partial<{
    name: string
    email: string
    settings: { theme: 'dark' | 'light' }
}>

export const updateUser = (id: string, userData: UpdateUserData) => {
    return User.findByIdAndUpdate(id, userData, { returnDocument: 'after', runValidators: true })
}