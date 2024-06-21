import { Request, Response } from 'express'
import { getEvents } from './controllers/getEvents'
import { createEvent } from './controllers/createEvent'
import { updateEvent } from './controllers/updateEvent'
import { deleteEvent } from './controllers/deleteEvent'

interface Controller {
  getEvents: (req: Request, res: Response) => void
  createEvent: (req: Request, res: Response) => void
  updateEvent: (req: Request, res: Response) => void
  deleteEvent: (req: Request, res: Response) => void
}

const controller: Controller = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
}

export default controller
