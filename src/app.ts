import express, { Application } from 'express'
import cors from 'cors'

import globalErrorHandler from './app/middlewares/globalErrorHandler'
import Routes from './app/routes'

const app: Application = express()
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.use('/api/v1', Routes)

// app.get('/', (req: Request, res: Response) => {

// })

//global error handler
app.use(globalErrorHandler)

export default app
