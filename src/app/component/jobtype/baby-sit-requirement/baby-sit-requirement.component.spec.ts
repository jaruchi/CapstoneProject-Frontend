import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabySitRequirementComponent } from './baby-sit-requirement.component';

describe('BabySitRequirementComponent', () => {
  let component: BabySitRequirementComponent;
  let fixture: ComponentFixture<BabySitRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabySitRequirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabySitRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
