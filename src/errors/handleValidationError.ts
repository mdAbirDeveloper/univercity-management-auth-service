import mongoose from 'mongoose'
import { IGenericErrorResponse } from '../interfaces/common'
import { IGenericErrorMessage } from '../interfaces/error'

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el.path, // Use a default value if path is missing
        message: el.message,
      }
    }
  )
  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  }
}

export default handleValidationError
