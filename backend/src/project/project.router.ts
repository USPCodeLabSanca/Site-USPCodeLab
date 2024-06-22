import express from 'express'
import controller from './project.controller'
import auth from '../middleware/auth'

const router = express.Router()

router.route('/').get(controller.getProjects)
router.route('/').all(auth).post(controller.createProject)
router.route('/:id').all(auth).patch(controller.updateProject)
router.route('/:id').all(auth).delete(controller.deleteProject)

export default router
