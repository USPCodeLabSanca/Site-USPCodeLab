import { Request, Response } from 'express'
import prisma from '../../db'

const createEvent = async (req: Request, res: Response) => {
  try {
    const { name, description, photo, date } = req.body
    if (!name || !description || !photo || !date)
      return res.status(400).send({ error: 'Nome, descrição, foto e data são obrigatórios.' })
    const event = await prisma.event.create({ data: { name, description, photo, date } })
    return res.send(event)
  } catch (error) {
    console.error(`INTERNAL ERROR Create Event: ${error}`)
    res.status(500).send({ error: 'Erro ao cadastrar evento.' })
  }
}

export { createEvent }
