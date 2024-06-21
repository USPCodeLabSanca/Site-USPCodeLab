import express from 'express'
import controller from './group.controller'

const router = express.Router()

router.route('/').get(controller.getGroups)
router.route('/').post(controller.createGroup)
router.route('/:id').patch(controller.updateGroup)

export default router
