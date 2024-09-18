import { Request, Response } from 'express'
import { getTechnologies } from './controllers/getTechnologies'
import { createTechnology } from './controllers/createTechnology'
import { deleteTechnology } from './controllers/deleteTechnology'
import { updateTechnology } from './controllers/updateTechnology'

interface Controller {
  getTechnologies: (req: Request, res: Response) => void
  createTechnology: (req: Request, res: Response) => void
  updateTechnology: (req: Request, res: Response) => void
  deleteTechnology: (req: Request, res: Response) => void
}

const controller: Controller = {
  getTechnologies,
  createTechnology,
  updateTechnology,
  deleteTechnology,
}

export default controller
