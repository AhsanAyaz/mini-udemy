import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseFormComponent } from './create-course-form.component';

describe('CreateCourseFormComponent', () => {
  let component: CreateCourseFormComponent;
  let fixture: ComponentFixture<CreateCourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCourseFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
