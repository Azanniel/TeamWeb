import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import User from '../models/User'
import UserView from '../views/UserView'

class UserController {
  async store (req: Request, res: Response) {
    const repository = getRepository(User)

    const { email, username, password } = req.body

    const userExists = await repository.findOne({ where: { email } })

    if (userExists) {
      return res.status(409).json({ message: 'email exists' })
    }

    const user = repository.create({
      username,
      email,
      password
    })

    await repository.save(user)

    return res.status(201).json(UserView.render(user))
  }
}

export default new UserController()
