import { Request, Response } from 'express'
import { getEvents } from './controllers/getEvents'

interface Controller {
  getEvents: (req: Request, res: Response) => void
}

const controller: Controller = {
  getEvents,
}

export default controller
