import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenCareApplicationComponent } from './garden-care-application.component';

describe('GardenCareApplicationComponent', () => {
  let component: GardenCareApplicationComponent;
  let fixture: ComponentFixture<GardenCareApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenCareApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenCareApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
