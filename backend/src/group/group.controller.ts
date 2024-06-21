import { Request, Response } from 'express'
import { getGroups } from './controllers/getGroups'

interface Controller {
  getGroups: (req: Request, res: Response) => void
}

const controller: Controller = {
  getGroups,
}

export default controller
