import mongoose from 'mongoose'
import app from './app'
import config from './config'
import logger from './shared/logger'

// const port = 5000

async function bootstrap() {
  try {
    app.listen(config.port, () => {
      logger.info(`Server started on port ${config.port}`)
    })
    await mongoose.connect(config.database_url as string)

    logger.info('database connected')
  } catch (error) {
    logger.error('failed to connect database ', error)
  }
}

bootstrap()
