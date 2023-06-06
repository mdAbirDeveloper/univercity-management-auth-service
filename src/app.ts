import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'

const app: Application = express()
const port = 5000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
console.log(app.get('env'))
app.use('/api/v1/users/', usersRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('working successfully')
})

export { app, port }
