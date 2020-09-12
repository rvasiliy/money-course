import {CourseProvider} from './course-provider';
import {CourseProviderHandler} from './course-provider-handler';

export abstract class CourseProviderFactory {
  abstract getProvider(): CourseProvider;
  abstract getHandler(): CourseProviderHandler;
}
