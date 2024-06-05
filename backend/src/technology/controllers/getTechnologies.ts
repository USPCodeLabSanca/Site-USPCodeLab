import { Request, Response } from 'express'
import prisma from '../../db'

const getTechnologies = async (req: Request, res: Response) => {
  try {
    const technologies = await prisma.technology.findMany()
    return res.send(technologies)
  } catch (error) {
    res.status(500).send({ error: 'Erro ao obter a lista de tecnologias cadastradas.' })
  }
}

export { getTechnologies }
