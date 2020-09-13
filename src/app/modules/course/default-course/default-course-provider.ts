import {Observable, of} from 'rxjs';

import {CourseProvider} from '../course-provider/course-provider';
import {Course} from '../course-provider/course';

export class DefaultCourseProvider implements CourseProvider {
  getCourses(): Observable<Course[]> {
    return of([
      {
        id: 1,
        code: 'EUR',
        name: 'Euro',
        nominal: 1,
        value: 60.00
      },
      {
        id: 2,
        code: 'USD',
        name: 'Dollar',
        nominal: 1,
        value: 60.00
      }
    ]);
  }
}
