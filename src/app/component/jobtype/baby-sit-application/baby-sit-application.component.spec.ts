import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabySitApplicationComponent } from './baby-sit-application.component';

describe('BabySitApplicationComponent', () => {
  let component: BabySitApplicationComponent;
  let fixture: ComponentFixture<BabySitApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabySitApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabySitApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
