import mongoose from 'mongoose'
import app from './app'
import config from './config'

// const port = 5000

async function bootstrap() {
  try {
    app.listen(config.port, () => {
      console.log(`Server started on port ${config.port}`)
    })
    await mongoose.connect(config.database_url as string)

    console.log('database connected')
  } catch (error) {
    console.log('failed to connect database ', error)
  }
}

bootstrap()
