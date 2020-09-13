import {Observable, of} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';

import {CourseProvider} from './course-provider';
import {Course} from './course';

export abstract class CourseProviderHandler {
  protected provider: CourseProvider;
  protected nextHandler: CourseProviderHandler;

  protected constructor(provider: CourseProvider) {
    this.provider = provider;
  }

  handle(): Observable<Course[]> {
    return this.provider.getCourses().pipe(
      switchMap(response => {
        if (null !== response) {
          return of(response);
        }

        return this.handleNext();
      }),
      catchError(() => {
        return this.handleNext();
      })
    );
  }

  setNextHandler(handler: CourseProviderHandler): CourseProviderHandler {
    this.nextHandler = handler;

    return this.nextHandler;
  }

  private handleNext(): Observable<Course[]> {
    if (this.nextHandler) {
      return this.nextHandler.handle();
    } else {
      return of(null);
    }
  }
}
