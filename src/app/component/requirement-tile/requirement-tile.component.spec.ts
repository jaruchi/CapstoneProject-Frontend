import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementTileComponent } from './requirement-tile.component';

describe('RequirementTileComponent', () => {
  let component: RequirementTileComponent;
  let fixture: ComponentFixture<RequirementTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
