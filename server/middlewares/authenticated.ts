import type { Request, Response, NextFunction } from 'express'
import { token } from '../helpers/index.ts'
import { User } from '../models/User.ts'

export const authenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tokenData = token.verify(req.cookies.token) as { id: string }

        const user = await User.findOne({ _id: tokenData.id })

        if (!user) {
            res.send({ error: 'Сессия недействительна, войдите снова' })
            return
        }

        res.locals.user = user

        next()
    } catch {
        res.send({ error: 'Сессия недействительна, войдите снова' })
    }
}