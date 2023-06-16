import {
  IAcademicSemesterTitles,
  IAcademicSemesterMonths,
  IAcademicSemesterCodes,
} from './academicSemester.interface';

export const academicSemesterTitles: IAcademicSemesterTitles[] = [
  'Autum',
  'Summer',
  'Fall',
];

export const academicSemesterCode: IAcademicSemesterCodes[] = [
  '01',
  '02',
  '03',
];

export const academicSemesterMonth: IAcademicSemesterMonths[] = [
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
];

export const academicSemesterTitleCodeMaper: { [key: string]: string } = {
  Autum: '01',
  Summer: '02',
  Fall: '03',
};
