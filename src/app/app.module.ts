import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourseModule} from './modules/course/course.module';
import {CbrCourseProviderFactory} from './cbr-course/cbr-course-provider-factory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CourseModule.registerFactories([
      CbrCourseProviderFactory
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
