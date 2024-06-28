import { Request, Response } from 'express'
import prisma from '../../db'

const createProject = async (req: Request, res: Response) => {
  try {
    const { name, description, github_link, date, photo, id_group, technologies } = req.body

    if (!name || !description || !github_link || !date || !id_group || !technologies)
      return res.status(400).send({ error: 'Nome, descrição, link do github e data são obrigatórios.' })

    const group = await prisma.group.findUnique({ where: { id_group } })

    if (!group) return res.status(404).send({ error: 'Grupo não encontrado.' })

    const project = await prisma.project.create({
      data: {
        name,
        description,
        github_link,
        date,
        photo,
        id_group,
        technologies: {
          connect: [
            ...(technologies || []).map((technologyId: number) => ({
              id_technology: technologyId,
            })),
          ],
        },
      },
    })
    return res.send(project)
  } catch (error) {
    console.error(`INTERNAL ERROR CreateProject: ${error}`)
    res.status(500).send({ error: 'Erro ao cadastrar projeto.' })
  }
}

export { createProject }
