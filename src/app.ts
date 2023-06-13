import express, { Application, Request, Response } from 'express'
import cors from 'cors'

import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.json())
//application Routes
app.use('/api/v1/users', UserRoutes)

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!')
})

//global error handler
app.use(globalErrorHandler)

export default app
