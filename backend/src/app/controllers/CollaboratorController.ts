import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Collaborator from '../models/Collaborator'
import User from '../models/User'
import CollaboratorView from '../views/CollaboratorView'

class CollaboratorController {
  async index (req: Request, res: Response) {
    const repository = getRepository(Collaborator)

    const { userId } = req

    const collaborators = await repository.find({ where: { creator: userId } })

    return res.json(CollaboratorView.renderMany(collaborators))
  }

  async store (req: Request, res: Response) {
    const collaboratorRepository = getRepository(Collaborator)
    const userRepository = getRepository(User)

    const creator = await userRepository.findOneOrFail(req.userId)
    const { name, cpf, department, position } = req.body

    const collaborator = collaboratorRepository.create({
      name,
      cpf,
      department,
      position,
      creator
    })

    await collaboratorRepository.save(collaborator)

    return res.status(201).json(CollaboratorView.render(collaborator))
  }

  async update (req: Request, res: Response) {
    const repository = getRepository(Collaborator)

    const { id } = req.params
    const { name, cpf, department, position } = req.body

    await repository.update({ id: Number(id) }, {
      name,
      cpf,
      department,
      position
    })

    const collaborator = await repository.findOne({ where: { id: Number(id) } })

    if (!collaborator) {
      return res.sendStatus(404)
    }

    return res.status(200).json(CollaboratorView.render(collaborator))
  }

  async destroy (req: Request, res: Response) {
    const repository = getRepository(Collaborator)
    const { id } = req.params

    await repository.delete({
      id: Number(id)
    })

    return res.sendStatus(204)
  }
}

export default new CollaboratorController()
