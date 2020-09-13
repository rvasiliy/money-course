import {CourseProviderHandler} from '../course-provider/course-provider-handler';
import {CourseProvider} from '../course-provider/course-provider';

export class DefaultCourseProviderHandler extends CourseProviderHandler {
  constructor(provider: CourseProvider) {
    super(provider);
  }
}
