import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCareApplicationComponent } from './pet-care-application.component';

describe('PetCareApplicationComponent', () => {
  let component: PetCareApplicationComponent;
  let fixture: ComponentFixture<PetCareApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetCareApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCareApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
