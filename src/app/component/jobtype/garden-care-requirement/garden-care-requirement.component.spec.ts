import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenCareRequirementComponent } from './garden-care-requirement.component';

describe('GardenCareRequirementComponent', () => {
  let component: GardenCareRequirementComponent;
  let fixture: ComponentFixture<GardenCareRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenCareRequirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenCareRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
