import { Request, Response } from 'express'
import prisma from '../../db'

const deleteGroup = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    await prisma.group.delete({ where: { id_group: id } })
    return res.send({ ok: true })
  } catch (error) {
    res.status(500).send({ error: 'Erro ao deletar grupo.' })
  }
}

export { deleteGroup }
