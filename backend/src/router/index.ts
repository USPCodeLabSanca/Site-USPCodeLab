import express from 'express'

import technologyRouter from '../technology/technology.router'
import groupRouter from '../group/group.router'
import eventRouter from '../event/event.router'

const router = express.Router()

router.use('/technology', technologyRouter)
router.use('/group', groupRouter)
router.use('/event', eventRouter)

export default router
