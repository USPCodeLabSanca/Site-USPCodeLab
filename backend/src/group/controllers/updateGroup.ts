import { Request, Response } from 'express'
import prisma from '../../db'

const updateGroup = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const { name, description, logo, subtitle, image } = req.body

    const group = await prisma.group.findUnique({ where: { id_group: id } })

    if (!group) return res.status(404).send({ error: 'Grupo não encontrado.' })

    const newGroup = await prisma.group.update({
      where: { id_group: id },
      data: { name, description, logo, subtitle, image },
    })

    return res.send(newGroup)
  } catch (error) {
    res.status(500).send({ error: 'Erro ao atualizar grupo.' })
  }
}

export { updateGroup }
