import {CourseProviderHandler} from '../modules/course/course-provider/course-provider-handler';
import {CourseProvider} from '../modules/course/course-provider/course-provider';

export class CbrCourseProviderHandler extends CourseProviderHandler {
  constructor(provider: CourseProvider) {
    super(provider);
  }
}
