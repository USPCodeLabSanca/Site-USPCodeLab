import { Request, Response } from 'express'
import { getGroups } from './controllers/getGroups'
import { createGroup } from './controllers/createGroup'
import { updateGroup } from './controllers/updateGroup'

interface Controller {
  getGroups: (req: Request, res: Response) => void
  createGroup: (req: Request, res: Response) => void
  updateGroup: (req: Request, res: Response) => void
}

const controller: Controller = {
  getGroups,
  createGroup,
  updateGroup,
}

export default controller
