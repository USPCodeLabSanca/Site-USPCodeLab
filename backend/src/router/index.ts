import express from 'express'

import technologyRouter from '../technology/technology.router'
import groupRouter from '../group/group.router'
import eventRouter from '../event/event.router'
import projectRouter from '../project/project.router'

const router = express.Router()

router.use('/technology', technologyRouter)
router.use('/group', groupRouter)
router.use('/event', eventRouter)
router.use('/project', projectRouter)

export default router
