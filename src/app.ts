import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()
const port = 5000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', UserRoutes.router)

app.get('/', (req: Request, res: Response) => {
  throw new Error('there was an error')
  // next('there was an error') //error
})

app.use(globalErrorHandler)
export { app, port }
