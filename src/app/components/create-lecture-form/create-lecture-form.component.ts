import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Course } from '../../types';
@Component({
  selector: 'app-create-lecture-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-lecture-form.component.html',
  styleUrl: './create-lecture-form.component.scss',
})
export class CreateLectureFormComponent {
  lectureForm!: FormGroup;
  fb = inject(FormBuilder);
  @Input() course!: Course;
  @Output() formSubmit = new EventEmitter<void>();

  constructor() {
    this.lectureForm = this.fb.group({
      title: ['', Validators.required],
      duration: ['', Validators.required],
      description: [''],
    });
  }

  onSubmit() {}
}
