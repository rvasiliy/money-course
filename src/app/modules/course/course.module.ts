import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseComponent} from './course/course.component';
import {CourseProviderService} from './services/course-provider.service';
import {COURSE_PROVIDER_FACTORY_TOKEN} from './tokens/course-provider-factory.token';
import {CourseProviderFactory} from './course-provider/course-provider-factory';

@NgModule({
  declarations: [CourseComponent],
  imports: [CommonModule],
  providers: [CourseProviderService],
  exports: [CourseComponent]
})
export class CourseModule {
  static registerFactories(factories: CourseProviderFactory[]): ModuleWithProviders<CourseModule> {
    const courseProviderFactories = factories || [];

    return {
      ngModule: CourseModule,
      providers: [
        {provide: COURSE_PROVIDER_FACTORY_TOKEN, useValue: courseProviderFactories}
      ]
    };
  }
}
