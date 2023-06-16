import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routers from './app/routes';

const app: Application = express();
const port = 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routers);

// app.use('/api/v1/users/', UserRoutes.router);
// app.use('/api/v1/academic-semester', AcademicSemestreRoutes.router);

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // Promise.reject(new Error('Unhandeled Promise Rejaction'))
//   res.send('just for git push');
//   next();
//   // throw new Error('there was an new error')
//   // next('there was an error') //error
// });

app.use(globalErrorHandler);
export { app, port };
