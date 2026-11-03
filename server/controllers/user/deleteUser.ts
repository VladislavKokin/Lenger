import { User } from "../../models/User.ts";

export const deleteUser = (id: string) => {
    return User.deleteOne({ _id: id })
}