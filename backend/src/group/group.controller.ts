import { Request, Response } from 'express'
import { getGroups } from './controllers/getGroups'
import { createGroup } from './controllers/createGroup'

interface Controller {
  getGroups: (req: Request, res: Response) => void
  createGroup: (req: Request, res: Response) => void
}

const controller: Controller = {
  getGroups,
  createGroup,
}

export default controller
