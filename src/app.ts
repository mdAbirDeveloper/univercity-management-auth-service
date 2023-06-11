import express, {
  Application,
  NextFunction,
  Request,
  Response,
  response,
} from 'express'
import cors from 'cors'

const app: Application = express()
const port = 5000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

class ApiError extends Error {
  statusCode: number

  constructor(statusCode: number, message: string | undefined, stack = '') {
    super(message)
    this.statusCode = statusCode
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  throw new Error('there was an error')
  // next('there was an error') //error
})

//global error handler
app.use((err, req: request, res: response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({ error: err })
  } else {
    res.status(500).json({ error: 'something went wrong' })
  }
})

export { app, port }
