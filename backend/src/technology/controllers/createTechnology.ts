import { Request, Response } from 'express'
import prisma from '../../db'

const createTechnology = async (req: Request, res: Response) => {
  try {
    const { name, logo } = req.body
    if (!name || !logo) return res.status(400).send({ error: 'Nome e logo são obrigatórios.' })
    const technology = await prisma.technology.create({ data: { name, logo } })
    return res.send(technology)
  } catch (error) {
    res.status(500).send({ error: 'Erro ao cadastrar tecnologia.' })
  }
}

export { createTechnology }
