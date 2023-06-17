import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicSemesterTitleCodeMaper } from './acadeicSemester.conostant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemesterMode';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMaper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }
  const result = await AcademicSemester.create(payload);
  console.log('from service ', result);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
