import bcrypt from 'bcrypt'
import { User } from "../../models/User.ts";
import { token } from '../../helpers/index.ts';

export const login = async (email: string, password: string) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Пользователь не найден!')
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if(!isPasswordMatch) {
        throw new Error('Неверный пароль!')
    }

    const accessToken = token.generate({ id: user.id })

    return { token: accessToken, user }
};