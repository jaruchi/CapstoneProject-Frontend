import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfilledRequirementsComponent } from './fulfilled-requirements.component';

describe('FulfilledRequirementsComponent', () => {
  let component: FulfilledRequirementsComponent;
  let fixture: ComponentFixture<FulfilledRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulfilledRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulfilledRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
