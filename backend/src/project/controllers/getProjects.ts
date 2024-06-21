import { Request, Response } from 'express'
import prisma from '../../db'

const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany({ orderBy: { name: 'asc' } })
    return res.send(projects)
  } catch (error) {
    res.status(500).send({ error: 'Erro ao obter a lista de projetos cadastrados.' })
  }
}

export { getProjects }
