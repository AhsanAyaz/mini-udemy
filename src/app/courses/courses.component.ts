import { Component } from '@angular/core';
import { CourseCardComponent } from '../components/course-card/course-card.component';
import { ModalComponent } from '../components/modal/modal.component';
import { CreateCourseFormComponent } from '../components/create-course-form/create-course-form.component';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../components/loader/loader.component';
import { Course } from '../types';
import { COURSES } from '../dummy-data';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CourseCardComponent,
    ModalComponent,
    CreateCourseFormComponent,
    AsyncPipe,
    LoaderComponent,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  isCreateCourseModalOpen = false;
  courses: Course[] = COURSES;
}
