import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpSliderComponent } from './wp-slider.component';

describe('WpSliderComponent', () => {
  let component: WpSliderComponent;
  let fixture: ComponentFixture<WpSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
