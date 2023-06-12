import { Request, Response } from 'express'
import { IGenericErrorMessage } from '../../interfaces/error'
import handleValidationError from '../../errors/handleValidationError'
import config from '../../config'
// import { error } from 'winston'
import ApiError from '../../errors/ApiError'

const globalErrorHandler = (
  error: string, //it should be 'any', i have write it 'string' just for push code on github
  req: Request,
  res: Response
  // next: NextFunction
) => {
  let stasusCode = 500
  let message = 'sumething went wrong'
  let errorMessage: IGenericErrorMessage[] = []

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    stasusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
  } else if (error instanceof ApiError) {
    stasusCode = error?.statusCode
    message = error?.message
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(stasusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? error?.stack : undefined,
  })
}
export default globalErrorHandler
