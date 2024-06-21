import { Request, Response } from 'express'
import { getProjects } from './controllers/getProjects'
import { createProject } from './controllers/createProject'
import { updateProject } from './controllers/updateProject'

interface Controller {
  getProjects: (req: Request, res: Response) => void
  createProject: (req: Request, res: Response) => void
  updateProject: (req: Request, res: Response) => void
}

const controller: Controller = {
  getProjects,
  createProject,
  updateProject,
}

export default controller
