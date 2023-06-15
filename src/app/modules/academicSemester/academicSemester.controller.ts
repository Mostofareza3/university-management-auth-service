import { NextFunction, Request, Response } from 'express'
import { AcademicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { IAcademicSemester } from './academicSemester.interface'
import pick from '../../../shared/pick'
import { paginationFields } from '../../../constants/pagination'

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    )
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Academic semester is created Successfully',
      data: result,
    })
    next()
  }
)

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  //format query parameter using pick function
  const paginationOptions = pick(req.query, paginationFields)

  const result = await AcademicSemesterService.getAllSemesters(
    paginationOptions
  )

  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semesters retrieved successfully',
    data: result.data,
    meta: result.meta,
  })
})

export const academicSemesterController = { createSemester, getAllSemesters }
