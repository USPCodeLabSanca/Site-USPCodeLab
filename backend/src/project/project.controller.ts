import { Request, Response } from 'express'
import { getProjects } from './controllers/getProjects'
import { createProject } from './controllers/createProject'

interface Controller {
  getProjects: (req: Request, res: Response) => void
  createProject: (req: Request, res: Response) => void
}

const controller: Controller = {
  getProjects,
  createProject,
}

export default controller
