import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import router from './app/modules/users/users.route'

const app: Application = express()
const port = 5000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', router)

app.get('/', (req: Request, res: Response) => {
  res.send('all is good')
  // throw new Error('there was an error')
  // next('there was an error') //error
})

app.use(globalErrorHandler)
export { app, port }
