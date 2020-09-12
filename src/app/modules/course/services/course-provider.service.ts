import {Inject, Injectable} from '@angular/core';

import {COURSE_PROVIDER_FACTORY_TOKEN} from '../tokens/course-provider-factory.token';
import {CourseProviderFactory} from '../course-provider/course-provider-factory';
import {Course} from '../course-provider/course';

@Injectable()
export class CourseProviderService {
  constructor(@Inject(COURSE_PROVIDER_FACTORY_TOKEN) private factories: CourseProviderFactory[]) {
  }

  getCourses(): Course[] {
    return [];
  }
}
