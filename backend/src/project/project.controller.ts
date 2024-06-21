import { Request, Response } from 'express'
import { getProjects } from './controllers/getProjects'

interface Controller {
  getProjects: (req: Request, res: Response) => void
}

const controller: Controller = {
  getProjects,
}

export default controller
