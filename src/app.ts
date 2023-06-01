import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()
const port = 5000

           app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('working successfully')
})

export { app, port }
