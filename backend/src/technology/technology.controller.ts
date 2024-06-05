import { Request, Response } from 'express'
import { getTechnologies } from './controllers/getTechnologies'

interface Controller {
  getTechnologies: (req: Request, res: Response) => void
}

const controller: Controller = {
  getTechnologies,
}

export default controller
