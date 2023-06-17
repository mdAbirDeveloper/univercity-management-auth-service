import express from 'express';
import { UserControlar } from './user.controlar';
import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserControlar.createUser
);

export const UserRoutes = { router };
