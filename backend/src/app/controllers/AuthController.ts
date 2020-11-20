import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User'
import UserView from '../views/UserView'

class AuthController {
  async authenticate (req: Request, res: Response) {
    const repository = getRepository(User)

    const { email, password } = req.body

    const user = await repository.findOne({ where: { email } })

    if (!user) {
      return res.sendStatus(401)
    }

    const isValidePassword = await bcrypt.compare(password, user.password)

    if (!isValidePassword) {
      return res.sendStatus(401)
    }

    const secret = process.env.JWT_SECRET ? process.env.JWT_SECRET : 'secret.testing'

    const token = jwt.sign({ id: user.id }, secret, { expiresIn: '30m' })
    const response = {
      user: UserView.render(user),
      token
    }

    return res.json(response)
  }
}

export default new AuthController()
