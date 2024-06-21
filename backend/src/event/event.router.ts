import express from 'express'
import controller from './event.controller'

const router = express.Router()

router.route('/').get(controller.getEvents)

export default router
