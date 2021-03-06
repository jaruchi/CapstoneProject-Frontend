import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorApplicationComponent } from './tutor.component';

describe('TutorComponent', () => {
  let component: TutorApplicationComponent;
  let fixture: ComponentFixture<TutorApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
