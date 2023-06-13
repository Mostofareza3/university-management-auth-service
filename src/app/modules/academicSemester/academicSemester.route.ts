import express from 'express'

import validateRequest from '../../middlewares/validateRequest'
import { AcademicSemesterValidation } from './academicSemester.validation'

const router = express.Router()

router.post(
  '/create-user',
  validateRequest(AcademicSemesterValidation.crateAcademicSemesterZodSchema)
)

export const UserRoutes = router
