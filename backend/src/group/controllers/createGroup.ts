import { Request, Response } from 'express'
import prisma from '../../db'

const createGroup = async (req: Request, res: Response) => {
  try {
    const { name, subtitle, image, description, logo } = req.body
    if (!name || !logo || !description || !subtitle || !image)
      return res.status(400).send({ error: 'Nome, descrição. imagem, subtítulo e logo são obrigatórios.' })
    const group = await prisma.group.create({ data: { name, description, logo, subtitle, image } })
    return res.send(group)
  } catch (error) {
    res.status(500).send({ error: 'Erro ao cadastrar grupo.' })
  }
}

export { createGroup }
