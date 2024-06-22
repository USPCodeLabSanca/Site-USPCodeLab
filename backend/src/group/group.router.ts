import express from 'express'
import controller from './group.controller'
import auth from '../middleware/auth'

const router = express.Router()

router.route('/').get(controller.getGroups)
router.route('/').all(auth).post(controller.createGroup)
router.route('/:id').all(auth).patch(controller.updateGroup)
router.route('/:id').all(auth).delete(controller.deleteGroup)

export default router
