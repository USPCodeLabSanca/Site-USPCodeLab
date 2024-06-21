import express from 'express'
import controller from './technology.controller'

const router = express.Router()

router.route('/').get(controller.getTechnologies)
router.route('/').post(controller.createTechnology)
router.route('/:id').delete(controller.deleteTechnology)

export default router
