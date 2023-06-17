import { ErrorRequestHandler } from 'express';
import { IGenericErrorMessage } from '../../interfaces/error';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import handleValidationError from '../../errors/handleValidationError';
import { errorlogger } from '../../shared/logger';
import { ZodError } from 'zod';
import handleZodError from '../../errors/hanldeZodError';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === 'development'
    ? console.log('globalErrorHandler ~~', error)
    : errorlogger.error('globalErrorHandler ~~', error);

  let stasusCode = 400;
  let message = 'sumething went wrong';
  let errorMessage: IGenericErrorMessage[] = [];

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    stasusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessage = simplifiedError.errorMessage;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    stasusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessage = simplifiedError.errorMessage;
  } else if (error instanceof ApiError) {
    stasusCode = error?.statusCode;
    message = error?.message;
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }
  res.status(stasusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });
  next();
};
export default globalErrorHandler;
