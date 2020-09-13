import {Injector, ModuleWithProviders, NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CourseComponent} from './course/course.component';
import {CourseProviderService} from './services/course-provider.service';
import {COURSE_PROVIDER_FACTORY_TOKEN} from './tokens/course-provider-factory.token';
import {CourseProviderFactory} from './course-provider/course-provider-factory';

@NgModule({
  declarations: [CourseComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [CourseProviderService],
  exports: [CourseComponent]
})
/**
 * @example
 * ```
 * @NgModule({
 *  imports: [
 *    CourseModule.registerFactories([
 *      DefaultCourseProviderFactory
 *    ])
 *  ],
 *  bootstrap: [AppComponent]
 * })
 * export class AppModule { }
 * ```
 */
export class CourseModule {
  static injector: Injector;

  constructor(private injector: Injector) {
    CourseModule.injector = injector;
  }

  static registerFactories(factories: Type<CourseProviderFactory>[]): ModuleWithProviders<CourseModule> {
    const courseProviderFactories = factories || [];

    return {
      ngModule: CourseModule,
      providers: [
        {provide: COURSE_PROVIDER_FACTORY_TOKEN, useValue: courseProviderFactories}
      ]
    };
  }
}
