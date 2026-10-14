import bcrypt from 'bcrypt'
import { User } from "../models/User.ts";

export const register = async (name: string, email: string, password: string) => {
    if (!password) {
        throw new Error('Password is empty');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: passwordHash })

    return user;
}