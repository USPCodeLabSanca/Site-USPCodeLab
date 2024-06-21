import { Request, Response } from 'express'
import prisma from '../../db'

const updateTechnology = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const { name, logo } = req.body

    const technology = await prisma.technology.findUnique({ where: { id_technology: id } })

    if (!technology) return res.status(404).send({ error: 'Tecnologia não encontrada.' })

    const newTechnology = await prisma.technology.update({
      where: { id_technology: id },
      data: { name, logo },
    })

    return res.send(newTechnology)
  } catch (error) {
    res.status(500).send({ error: 'Erro ao deletar tecnologia.' })
  }
}

export { updateTechnology }
