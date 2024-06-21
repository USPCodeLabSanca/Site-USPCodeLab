import { Request, Response } from 'express'
import { getTechnologies } from './controllers/getTechnologies'
import { createTechnology } from './controllers/createTechnology'

interface Controller {
  getTechnologies: (req: Request, res: Response) => void
  createTechnology: (req: Request, res: Response) => void
}

const controller: Controller = {
  getTechnologies,
  createTechnology,
}

export default controller
