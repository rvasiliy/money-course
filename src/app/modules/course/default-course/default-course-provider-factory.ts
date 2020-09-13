import {CourseProviderFactory} from '../course-provider/course-provider-factory';
import {CourseProvider} from '../course-provider/course-provider';
import {CourseProviderHandler} from '../course-provider/course-provider-handler';

import {DefaultCourseProvider} from './default-course-provider';
import {DefaultCourseProviderHandler} from './default-course-provider-handler';

export class DefaultCourseProviderFactory extends CourseProviderFactory {
  constructor() {
    super();
  }

  protected getProvider(): CourseProvider {
    return new DefaultCourseProvider();
  }

  getHandler(): CourseProviderHandler {
    return new DefaultCourseProviderHandler(this.getProvider());
  }
}
