import { Request, Response } from 'express'
import { getProjects } from './controllers/getProjects'
import { createProject } from './controllers/createProject'
import { updateProject } from './controllers/updateProject'
import { deleteProject } from './controllers/deleteProject'

interface Controller {
  getProjects: (req: Request, res: Response) => void
  createProject: (req: Request, res: Response) => void
  updateProject: (req: Request, res: Response) => void
  deleteProject: (req: Request, res: Response) => void
}

const controller: Controller = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
}

export default controller
