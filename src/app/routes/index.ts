import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemestreRoutes } from '../modules/academicSemester/academicSemester.route';

const router = express();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes.router,
  },
  {
    path: '/academic-semester',
    route: AcademicSemestreRoutes.router,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
