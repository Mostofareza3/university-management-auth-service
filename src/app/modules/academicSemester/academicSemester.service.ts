import ApiError from '../../../errors/ApiError'
import { academicSemesterTitleCodeMapper } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'
import httpStatus from 'http-status'

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  //check Academic semester and title match

  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Academic semester and title code do not match'
    )
  }

  const result = await AcademicSemester.create(payload)

  return result
}

export const AcademicSemesterService = {
  createSemester,
}
