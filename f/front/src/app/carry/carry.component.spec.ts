import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryComponent } from './carry.component';

describe('CarryComponent', () => {
  let component: CarryComponent;
  let fixture: ComponentFixture<CarryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
