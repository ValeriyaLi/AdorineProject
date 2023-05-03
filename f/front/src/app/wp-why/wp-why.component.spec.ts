import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpWhyComponent } from './wp-why.component';

describe('WpWhyComponent', () => {
  let component: WpWhyComponent;
  let fixture: ComponentFixture<WpWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpWhyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
