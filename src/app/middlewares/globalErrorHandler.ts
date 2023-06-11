import { Request, Response, NextFunction } from 'express'

const globalErrorHandler = (
  err: string,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).json({ biswash: err })
  next()
}

export default globalErrorHandler
