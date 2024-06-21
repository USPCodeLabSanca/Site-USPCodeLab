import { Request, Response } from 'express'
import { getEvents } from './controllers/getEvents'
import { createEvent } from './controllers/createEvent'

interface Controller {
  getEvents: (req: Request, res: Response) => void
  createEvent: (req: Request, res: Response) => void
}

const controller: Controller = {
  getEvents,
  createEvent,
}

export default controller
