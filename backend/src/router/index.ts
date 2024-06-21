import express from 'express'

import technologyRouter from '../technology/technology.router'
import groupRouter from '../group/group.router'

const router = express.Router()

router.use('/technology', technologyRouter)
router.use('/group', groupRouter)

export default router
