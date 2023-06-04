import { Action } from 'redux';

import store from '../../store';

export enum SagaAction {
  LOAD_DATA = 'LOAD_DATA',
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',

  PROFILE_GET = 'PROFILE_GET',
  TELEGRAM_TOKEN_GET = 'TELEGRAM_TOKEN_GET',

  TEACHERS_GET = 'TEACHERS_GET',
  TEACHER_GET = ' TEACHER_GET',
  TEACHER_CREATE = 'TEACHER_CREATE',
  TEACHER_UPDATE = 'TEACHER_UPDATE',
  TEACHER_DELETE = 'TEACHER_DELETE',
  TEACHER_PASSWORD_UPDATE = 'TEACHER_PASSWORD_UPDATE',

  STUDENTS_GET = 'STUDENTS_GET',
  STUDENT_GET = ' STUDENT_GET',
  STUDENT_CREATE = 'STUDENT_CREATE',
  STUDENT_UPDATE = 'STUDENT_UPDATE',
  STUDENT_DELETE = 'STUDENT_DELETE',
  STUDENT_PASSWORD_UPDATE = 'STUDENT_PASSWORD_UPDATE',

  GROUPS_GET = 'GROUPS_GET',
  GROUP_GET = 'GROUP_GET',
  GROUP_CREATE = 'GROUP_CREATE',
  GROUP_UPDATE = 'GROUP_UPDATE',
  GROUP_DELETE = 'GROUP_DELETE',

  GROUPS_PARTICIPANTS_CREATE = 'GROUPSPARTICIPANTS_CREATE',
  GROUPS_PARTICIPANTS_GET = 'GROUPS_PARTICIPANTS_GET',
  GROUPS_PARTICIPANTS_DELETE = 'GROUPS_PARTICIPANTS_DELETE',

  SPECIALITIES_GET = 'SPECIALITIES_GET',
  SPECIALITY_GET = 'SPECIALITY_GET',
  SPECIALITY_CREATE = 'SPECIALITY_CREATE',
  SPECIALITY_UPDATE = 'SPECIALITY_UPDATE',
  SPECIALITY_DELETE = 'SPECIALITY_DELETE',

  COURSES_GET = 'COURSES_GET',
  COURSE_GET = 'COURSE_GET',
  COURSE_CREATE = 'COURSE_CREATE',
  COURSE_UPDATE = 'COURSE_UPDATE',
  COURSE_DELETE = 'COURSE_DELETE',
  COURSES_RESET = 'COURSES_RESET',
  COURSE_MEETING_GET = 'COURSE_MEETING_GET',
  COURSE_MEETING_DELETE = 'COURSE_MEETING_DELETE',

  COURSES_TOPICS_GET = 'COURSES_TOPICS_GET',
  COURSES_TOPIC_GET = 'COURSES_TOPIC_GET',
  COURSES_TOPIC_UPDATE = 'COURSES_TOPIC_UPDATE',
  COURSES_TOPICS_CREATE = 'COURSES_TOPICS_CREATE',
  COURSES_TOPIC_DELETE = 'COURSES_TOPIC_DELETE',

  COURSES_TOPICS_ACTIVITIES_GET = 'COURSES_TOPICS_ACTIVITIES_GET',
  COURSES_TOPICS_ACTIVITY_GET = 'COURSES_TOPICS_ACTIVITY_GET',
  COURSES_TOPICS_ACTIVITY_UPDATE = 'COURSES_TOPICS_ACTIVITY_UPDATE',
  COURSES_TOPICS_ACTIVITY_CREATE = 'COURSES_TOPICS_ACTIVITY_CREATE',
  COURSES_TOPICS_ACTIVITY_DELETE = 'COURSES_TOPICS_ACTIVITY_DELETE',

  COURSES_GRADE_BOOK_RESET = 'COURSES_GRADE_BOOK_RESET',
  COURSES_GRADE_BOOK_GET_FOR_TEACHER = 'COURSES_GRADE_BOOK_GET_FOR_TEACHER',
  COURSES_GRADE_BOOK_GET_FOR_STUDENT = 'COURSES_GRADE_BOOK_GET_FOR_STUDENT',
  COURSES_PASSED_ASSIGNMENTS_GET = 'COURSES_PASSED_ASSIGNMENTS_GET',
  COURSES_PASSED_ASSIGNMENT_GET = 'COURSES_PASSED_ASSIGNMENT_GET',
  COURSES_PASSED_ASSIGNMENT_GET_FOR_STUDENT = 'COURSES_PASSED_ASSIGNMENT_GET_FOR_STUDENT',
  COURSES_PASSED_ASSIGNMENT_CREATE = 'COURSES_PASSED_ASSIGNMENT_CREATE',
  COURSES_PASSED_ASSIGNMENT_DELETE = 'COURSES_PASSED_ASSIGNMENT_DELETE',
  COURSES_PASSED_ASSIGNMENT_UPDATE = 'COURSES_PASSED_ASSIGNMENT_UPDATE',

  COURSES_TIMETABLES_GET = 'COURSES_TIMETABLES_GET',
  COURSES_TIMETABLES_GET_FOR_USER = 'COURSES_TIMETABLES_GET_FOR_USER',
  COURSES_TIMETABLE_GET = 'COURSES_TIMETABLE_GET',
  COURSES_TIMETABLE_CREATE = 'COURSES_TIMETABLE_CREATE',
  COURSES_TIMETABLE_DELETE = 'COURSES_TIMETABLE_DELETE',

  COURSES_PARTICIPANTS_CREATE = 'COURSES_PARTICIPANTS_CREATE',
  COURSES_PARTICIPANTS_GET = 'COURSES_PARTICIPANTS_GET',
  COURSES_PARTICIPANTS_DELETE = 'COURSES_PARTICIPANTS_DELETE',

  FIELS_GET = 'FIELS_GET',
  FILE_GET = 'FILE_GET',
  FILE_UPLOAD = 'FILE_UPLOAD',
  FILE_DELETE = 'FILE_DELETE',
  FILE_CREATE = 'FILE_CREATE',
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type PaginationQueryParams =
  | {
      page: number;
      take: number;
      asc?: string;
      desc?: string;
      select?: string[];
      search?: string;
    }
  | { [key: string]: string };

export interface PaginationResult<T> {
  result: T[];
  total: number;
}

export type SortingDirection = 'ascend' | 'descend';

export interface LoadDataPayload<T = any> {
  endpoint: string;
  action: (data: T) => Action;
  query?: Record<string, string | number>;
}

export interface ReduxAction<T = any> {
  type: SagaAction;
  payload?: T;
}
