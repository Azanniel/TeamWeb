import { Router } from 'express'

import AuthController from './app/controllers/AuthController'
import UserController from './app/controllers/UserController'
import CollaboratorController from './app/controllers/CollaboratorController'

import authMiddleware from './app/middlewares/authMiddleware'

const routes = Router()

routes.post('/user', UserController.store)
routes.post('/auth', AuthController.authenticate)

routes.get('/collaborators', authMiddleware, CollaboratorController.index)
routes.post('/collaborators', authMiddleware, CollaboratorController.store)
routes.put('/collaborators/:id', authMiddleware, CollaboratorController.update)
routes.delete('/collaborators/:id', authMiddleware, CollaboratorController.destroy)

export default routes
