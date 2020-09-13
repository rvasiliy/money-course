import {Course} from './course';
import {Observable} from 'rxjs';

export interface CourseProvider {
  getCourses(): Observable<Course[]>;
}
