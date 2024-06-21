import { Request, Response } from 'express'
import prisma from '../../db'

const getGroups = async (req: Request, res: Response) => {
  try {
    const groups = await prisma.group.findMany({ orderBy: { name: 'asc' } })
    return res.send(groups)
  } catch (error) {
    res.status(500).send({ error: 'Erro ao obter a lista de grupos cadastrados.' })
  }
}

export { getGroups }
