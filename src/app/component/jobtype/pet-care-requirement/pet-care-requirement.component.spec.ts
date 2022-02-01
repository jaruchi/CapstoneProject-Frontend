import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCareRequirementComponent } from './pet-care-requirement.component';

describe('PetCareRequirementComponent', () => {
  let component: PetCareRequirementComponent;
  let fixture: ComponentFixture<PetCareRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetCareRequirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCareRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
