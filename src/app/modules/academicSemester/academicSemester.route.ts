import express from 'express';
// import { UserControlar } from './user.controlar';
// import { AcademicSemesterValidation } from './academicSemester.validation';
// import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  // validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);

router.get('/', AcademicSemesterController.getAllSemester);

export const AcademicSemestreRoutes = router;
