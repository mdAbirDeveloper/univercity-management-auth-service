import { z } from 'zod';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(['Autum', 'Summer', 'Fall'], {
      required_error: 'Title is required',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
    code: z.enum(['01', '02', '03']),
    startMonth: z.enum(
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      {
        required_error: 'start month is required',
      }
    ),
    endMonth: z.enum(
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      {
        required_error: 'endMonth is required',
      }
    ),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
// await createUserZodSchema.parseAsync(req)
