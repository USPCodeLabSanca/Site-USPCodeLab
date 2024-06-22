import { Request, Response } from 'express'
import prisma from '../../db'

const updateProject = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const { name, description, github_link, date, photo, id_group, technologies } = req.body

    const project = await prisma.project.findUnique({ where: { id_project: id } })

    if (!project) return res.status(404).send({ error: 'Projeto não encontrado.' })

    if (id_group) {
      const group = await prisma.group.findUnique({ where: { id_group } })
      if (!group) return res.status(404).send({ error: 'Grupo não encontrado.' })
    }

    const newProject = await prisma.project.update({
      where: { id_project: id },
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

    return res.send(newProject)
  } catch (error) {
    console.error(`INTERNAL ERROR UpdateProject: ${error}`)
    res.status(500).send({ error: 'Erro ao atualizar projeto.' })
  }
}

export { updateProject }
