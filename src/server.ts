import mongoose from 'mongoose'
import { app, port } from './app'
import config from './config/index'
import { errorlogger, logger } from './shared/logger'
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('data base is connected successfully')

    app.listen(port, () => {
      logger.info(`Application listening on port ${port}`)
    })
  } catch (error) {
    errorlogger.error('faild to connect database', error)
  }
}

bootstrap()
