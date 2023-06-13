import mongoose from 'mongoose'
import { app, port } from './app'
import config from './config/index'
import { errorlogger, logger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', error => {
  errorlogger.error(error)
  process.exit(1)
})

let server: Server
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('data base is connected successfully')

    server = app.listen(port, () => {
      logger.info(`Application listening on port ${port}`)
    })
  } catch (error) {
    errorlogger.error('faild to connect database', error)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorlogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

process.on('SIGTERM', () => {
  logger.info('sigterm is received')
  if (server) {
    server.close()
  }
})
