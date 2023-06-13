import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorlogger, logger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', error => {
  errorlogger.error(error)
  process.exit(1)
})

let server: Server
async function bootstrap() {
  try {
    server = app.listen(config.port, () => {
      logger.info(`Server started on port ${config.port}`)
    })
    await mongoose.connect(config.database_url as string)

    logger.info('database connected')
  } catch (error) {
    errorlogger.error('failed to connect database ', error)
  }

  process.on('unhandledRejection', error => {
    // eslint-disable-next-line no-console
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
  logger.info('SIGTERM received')
  if (server) {
    server.close()
  }
})
