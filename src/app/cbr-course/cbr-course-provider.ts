import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, pluck} from 'rxjs/operators';

import {CourseProvider} from '../modules/course/course-provider/course-provider';
import {Course} from '../modules/course/course-provider/course';
import {CourseModule} from '../modules/course/course.module';

export class CbrCourseProvider implements CourseProvider {
  private url = 'https://www.cbr-xml-daily.ru/daily_json.js';

  getCourses(): Observable<Course[]> {
    const http = CourseModule.injector.get(HttpClient);

    return http.get<Course[]>(this.url).pipe(
      pluck('Valute'),
      map(valutes => {
        return Object.values(valutes).map(valute => {
          return {
            id: valute.ID,
            code: valute.CharCode,
            nominal: valute.Nominal,
            name: valute.Name,
            value: valute.Value
          };
        });
      })
    );
  }
}
