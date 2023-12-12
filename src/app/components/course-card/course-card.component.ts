import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../../types';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  @Input() course!: Course;
  image: File | null = null;
}
