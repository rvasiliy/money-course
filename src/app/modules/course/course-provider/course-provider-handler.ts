import {CourseProvider} from './course-provider';
import {Course} from './course';

export abstract class CourseProviderHandler {
  protected provider: CourseProvider;
  protected nextHandler: CourseProviderHandler;

  protected constructor(provider: CourseProvider) {
    this.provider = provider;
  }

  handle(): Course[] {
    const courses = this.provider.getCourses();

    if (null !== courses) {
      return courses;
    }

    if (this.nextHandler) {
      return this.nextHandler.handle();
    } else {
      return null;
    }
  }

  setNextHandler(handler: CourseProviderHandler): CourseProviderHandler {
    this.nextHandler = handler;

    return this.nextHandler;
  }
}
