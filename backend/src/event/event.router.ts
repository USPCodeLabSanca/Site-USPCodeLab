import express from 'express'
import controller from './event.controller'
import auth from '../middleware/auth'

const router = express.Router()

router.route('/').get(controller.getEvents)
router.route('/').all(auth).post(controller.createEvent)
router.route('/:id').all(auth).patch(controller.updateEvent)
router.route('/:id').all(auth).delete(controller.deleteEvent)

export default router
