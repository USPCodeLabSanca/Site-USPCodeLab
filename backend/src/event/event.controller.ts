import { Request, Response } from 'express'
import { getEvents } from './controllers/getEvents'
import { createEvent } from './controllers/createEvent'
import { updateEvent } from './controllers/updateEvent'

interface Controller {
  getEvents: (req: Request, res: Response) => void
  createEvent: (req: Request, res: Response) => void
  updateEvent: (req: Request, res: Response) => void
}

const controller: Controller = {
  getEvents,
  createEvent,
  updateEvent,
}

export default controller
