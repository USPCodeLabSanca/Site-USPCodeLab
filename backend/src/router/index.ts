import express from 'express'

import technologyRouter from '../technology/technology.router'

const router = express.Router()

router.use('/technology', technologyRouter)

export default router
