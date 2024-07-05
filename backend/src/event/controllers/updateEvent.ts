import { Request, Response } from 'express'
import prisma from '../../db'

const updateEvent = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const { name, description, photo, date } = req.body

    const event = await prisma.event.findUnique({ where: { id_event: id } })

    if (!event) return res.status(404).send({ error: 'Evento não encontrado.' })

    const newEvent = await prisma.event.update({
      where: { id_event: id },
      data: { name, description, photo, date },
    })

    return res.send(newEvent)
  } catch (error) {
    res.status(500).send({ error: 'Erro ao atualizar evento.' })
  }
}

export { updateEvent }
