import express from 'express'
import controller from './project.controller'

const router = express.Router()

router.route('/').get(controller.getProjects)
router.route('/').post(controller.createProject)
router.route('/:id').patch(controller.updateProject)

export default router
