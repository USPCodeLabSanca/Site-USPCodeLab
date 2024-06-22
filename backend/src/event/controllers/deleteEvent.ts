import { Request, Response } from 'express'
import prisma from '../../db'

const deleteEvent = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    await prisma.event.delete({ where: { id_event: id } })
    return res.send({ ok: true })
  } catch (error) {
    res.status(500).send({ error: 'Erro ao deletar evento.' })
  }
}

export { deleteEvent }
