import {Inject, Injectable, Type} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {COURSE_PROVIDER_FACTORY_TOKEN} from '../tokens/course-provider-factory.token';
import {CourseProviderFactory} from '../course-provider/course-provider-factory';
import {Course} from '../course-provider/course';
import {CourseProviderHandler} from '../course-provider/course-provider-handler';

@Injectable()
export class CourseProviderService {
  private readonly chainOfProviders: CourseProviderHandler;

  constructor(@Inject(COURSE_PROVIDER_FACTORY_TOKEN) private factories: Type<CourseProviderFactory>[]) {
    this.chainOfProviders = (new factories[0]()).getHandler();

    factories.reduce((chain, nextFactory) => {
      return chain.setNextHandler((new nextFactory()).getHandler());
    }, this.chainOfProviders);
  }

  getCourses(selector?: (course: Course) => boolean): Observable<Course[]> {
    const courses$ = this.chainOfProviders.handle();

    if (selector) {
      return courses$.pipe(map(courses => courses.filter(selector)));
    } else {
      return courses$;
    }
  }
}
