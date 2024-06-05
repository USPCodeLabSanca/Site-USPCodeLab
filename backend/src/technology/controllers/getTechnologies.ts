import { Request, Response } from 'express'

const getTechnologies = async (req: Request, res: Response) => {
  try {
    return res.send([])
  } catch (error) {
    res.status(500).send({ error: 'Erro ao obter a lista de tecnologias cadastradas.' })
  }
}

export { getTechnologies }
