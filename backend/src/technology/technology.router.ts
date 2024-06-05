import express from 'express'
import controller from './technology.controller'

const router = express.Router()

router.route('/').get(controller.getTechnologies)

export default router
