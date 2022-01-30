import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenApplicationsComponent } from './open-applications.component';

describe('OpenApplicationsComponent', () => {
  let component: OpenApplicationsComponent;
  let fixture: ComponentFixture<OpenApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
