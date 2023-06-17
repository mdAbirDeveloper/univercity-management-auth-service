import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';
// import httpStatus from 'http-status';

const app: Application = express();
const port = 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

// app.use('/api/v1/users/', UserRoutes.router);
// app.use('/api/v1/academic-semester', AcademicSemestreRoutes.router);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // Promise.reject(new Error('Unhandeled Promise Rejaction'))
  res.send('just for git push');
  next();
  // throw new Error('there was an new error')
  // next('there was an error') //error
});

app.use(globalErrorHandler);

//hanlde not found
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(httpStatus.NOT_FOUND).json({
//     success: false,
//     message: 'Not Found',
//     errorMessage: [
//       {
//         path: req.originalUrl,
//         message: 'Api not found',
//       },
//     ],
//   });
//   next();
// });

export { app, port };
