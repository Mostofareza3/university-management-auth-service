import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)

    app.listen(
      (config.port,
      () => {
        console.log(`Server started on port ${config.port}`)
      })
    )

    console.log('database connected')
  } catch (error) {
    console.log('failed to connect database ', error)
  }
}

bootstrap()
