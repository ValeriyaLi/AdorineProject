import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpAboutComponent } from './wp-about.component';

describe('WpAboutComponent', () => {
  let component: WpAboutComponent;
  let fixture: ComponentFixture<WpAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
