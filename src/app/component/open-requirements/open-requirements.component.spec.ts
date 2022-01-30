import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRequirementsComponent } from './open-requirements.component';

describe('OpenRequirementsComponent', () => {
  let component: OpenRequirementsComponent;
  let fixture: ComponentFixture<OpenRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
