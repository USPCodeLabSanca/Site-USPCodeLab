import { Request, Response } from 'express'
import prisma from '../../db'

const deleteTechnology = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    await prisma.technology.delete({ where: { id_technology: id } })
    return res.send({ ok: true })
  } catch (error) {
    res.status(500).send({ error: 'Erro ao deletar tecnologia.' })
  }
}

export { deleteTechnology }
