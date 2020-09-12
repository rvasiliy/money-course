import {Course} from './course';

export interface CourseProvider {
  getCourses(): Course[];
}
