import { Request, Response } from 'express'
import prisma from '../../db'

const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({ orderBy: { name: 'asc' } })
    return res.send(events)
  } catch (error) {
    res.status(500).send({ error: 'Erro ao obter a lista de eventos cadastrados.' })
  }
}

export { getEvents }
