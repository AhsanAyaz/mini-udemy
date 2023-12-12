import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureListItemComponent } from './lecture-list-item.component';

describe('LectureListItemComponent', () => {
  let component: LectureListItemComponent;
  let fixture: ComponentFixture<LectureListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectureListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LectureListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
