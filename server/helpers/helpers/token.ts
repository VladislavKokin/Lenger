import jwt from 'jsonwebtoken'

const sign = 'test';

export const token = {
    generate: (data: { id: string }) => jwt.sign(data, sign, { expiresIn: '30d' }),
    verify: (value: string) => jwt.verify(value, sign),
}
