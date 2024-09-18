import express from 'express'
import controller from './technology.controller'
import auth from '../middleware/auth'

const router = express.Router()

router.route('/').get(controller.getTechnologies)
router.route('/').all(auth).post(controller.createTechnology)
router.route('/:id').all(auth).patch(controller.updateTechnology)
router.route('/:id').all(auth).delete(controller.deleteTechnology)

export default router
