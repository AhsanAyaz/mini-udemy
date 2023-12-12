import { Component, Input } from '@angular/core';
import { Course, Lecture } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lecture-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lecture-list-item.component.html',
  styleUrl: './lecture-list-item.component.scss',
})
export class LectureListItemComponent {
  isOpen = false;
  @Input() lecture!: Lecture;
  @Input() course!: Course;

  toggle() {
    if (!this.lecture.description && !this.lecture.videoUrl) {
      return;
    }
    this.isOpen = !this.isOpen;
  }
}
