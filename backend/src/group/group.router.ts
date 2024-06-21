import express from 'express'
import controller from './group.controller'

const router = express.Router()

router.route('/').get(controller.getGroups)

export default router
