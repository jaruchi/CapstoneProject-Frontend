import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfilledApplicationsComponent } from './fulfilled-applications.component';

describe('FulfilledApplicationsComponent', () => {
  let component: FulfilledApplicationsComponent;
  let fixture: ComponentFixture<FulfilledApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulfilledApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulfilledApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
