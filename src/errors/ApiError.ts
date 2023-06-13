import { Error } from 'mongoose'

class ApiError extends Error {
  statusCode: number

  // stack?: string | undefined

  constructor(statusCode: number, message: string | undefined, stack = '') {
    super(message as string)
    this.statusCode = statusCode
    if (stack) this.stack = stack
    Error.captureStackTrace(this, this.constructor)
  }
}

export default ApiError
