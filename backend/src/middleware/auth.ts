import { NextFunction, Request, Response } from 'express'

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).send({ error: 'Header de Autorização não existe' })
  }

  if (authHeader !== `Bearer ${process.env.API_KEY}`) {
    return res.status(401).send({ error: 'Token inválido' })
  }

  next()
}

export default auth
