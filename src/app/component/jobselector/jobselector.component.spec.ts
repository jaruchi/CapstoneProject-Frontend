import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobselectorComponent } from './jobselector.component';

describe('JobselectorComponent', () => {
  let component: JobselectorComponent;
  let fixture: ComponentFixture<JobselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobselectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
