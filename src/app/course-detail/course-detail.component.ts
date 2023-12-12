import { Component, inject } from '@angular/core';
import { Course, Lecture } from '../types';
import { ActivatedRoute } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component';
import { CreateLectureFormComponent } from '../components/create-lecture-form/create-lecture-form.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LectureListItemComponent } from '../components/lecture-list-item/lecture-list-item.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { COURSES, LECTURES } from '../dummy-data';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    ModalComponent,
    CreateLectureFormComponent,
    AsyncPipe,
    LectureListItemComponent,
    LoaderComponent,
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss',
})
export class CourseDetailComponent {
  course: Course | null = COURSES[0];
  isLoadingCourse = false;
  lectures: Lecture[] = LECTURES;
  isCreateLectureModalOpen = false;
}
