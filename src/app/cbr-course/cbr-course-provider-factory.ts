import {CourseProviderFactory} from '../modules/course/course-provider/course-provider-factory';
import {CourseProviderHandler} from '../modules/course/course-provider/course-provider-handler';
import {CourseProvider} from '../modules/course/course-provider/course-provider';

import {CbrCourseProviderHandler} from './cbr-course-provider-handler';
import {CbrCourseProvider} from './cbr-course-provider';

export class CbrCourseProviderFactory extends CourseProviderFactory {
  constructor() {
    super();
  }

  protected getProvider(): CourseProvider {
    return new CbrCourseProvider();
  }

  getHandler(): CourseProviderHandler {
    return new CbrCourseProviderHandler(this.getProvider());
  }
}
