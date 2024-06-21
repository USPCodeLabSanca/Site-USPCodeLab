import { Request, Response } from 'express'
import prisma from '../../db'

const createProject = async (req: Request, res: Response) => {
  try {
    const { name, description, github_link, date, photo, id_group } = req.body

    if (!name || !description || !github_link || !date || !id_group)
      return res.status(400).send({ error: 'Nome, descrição, link do github e data são obrigatórios.' })

    const group = await prisma.group.findUnique({ where: { id_group } })

    if (!group) return res.status(404).send({ error: 'Grupo não encontrado.' })

    const project = await prisma.project.create({ data: { name, description, github_link, date, photo, id_group } })
    return res.send(project)
  } catch (error) {
    res.status(500).send({ error: 'Erro ao cadastrar projeto.' })
  }
}

export { createProject }
