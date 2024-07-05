import { Request, Response } from 'express'
import prisma from '../../db'

const deleteProject = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    await prisma.project.delete({ where: { id_project: id } })
    return res.send({ ok: true })
  } catch (error) {
    res.status(500).send({ error: 'Erro ao deletar projeto.' })
  }
}

export { deleteProject }
