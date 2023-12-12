import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLectureFormComponent } from './create-lecture-form.component';

describe('CreateLectureFormComponent', () => {
  let component: CreateLectureFormComponent;
  let fixture: ComponentFixture<CreateLectureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLectureFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLectureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
