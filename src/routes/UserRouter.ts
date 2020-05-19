import { Router } from 'express'

import UserController from '../controllers/UserController'

const routes = Router()

routes.get('/', async (req, res) => {
    const users = await UserController.find()
    return res.json(users)
})

export default routes