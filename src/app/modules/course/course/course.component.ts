import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, timer} from 'rxjs';
import {take, tap} from 'rxjs/operators';

import {CourseProviderService} from '../services/course-provider.service';
import {Course} from '../course-provider/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  /**
   * @example ['EUR']
   * @example ['EUR', 'USD']
   */
  @Input() currencies: string[];

  courses$: Observable<Course[]>;
  private courses = new BehaviorSubject<Course[]>([]);

  private readonly UPDATE_PERIOD = 10000; // milliseconds

  constructor(private courseProviderService: CourseProviderService) {
    this.courses$ = this.courses.asObservable();
  }

  ngOnInit(): void {
    timer(0, this.UPDATE_PERIOD).pipe(
      tap(() => {
        this.courseProviderService.getCourses(course => {
          if (Array.isArray(this.currencies) && this.currencies.length) {
            return this.currencies.some(currency => currency === course.code);
          }

          return true;
        })
          .pipe(take(1))
          .subscribe(courses => this.courses.next(courses));
      })
    ).subscribe();
  }
}
