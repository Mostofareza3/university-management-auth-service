import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

async function bootstrap() {
  try {
    app.listen(config.port, () => {
      logger.info(`Server started on port ${config.port}`)
    })
    await mongoose.connect(config.database_url as string)

    logger.info('database connected')
  } catch (error) {
    errorLogger.error('failed to connect database ', error)
  }
}

bootstrap()
