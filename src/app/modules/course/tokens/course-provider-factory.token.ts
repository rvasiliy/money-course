import {InjectionToken} from '@angular/core';
import {CourseProviderFactory} from '../course-provider/course-provider-factory';

export const COURSE_PROVIDER_FACTORY_TOKEN = new InjectionToken<CourseProviderFactory[]>('COURSE_PROVIDER_FACTORY_TOKEN');
