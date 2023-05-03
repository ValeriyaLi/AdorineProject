import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbotpageComponent } from './abotpage.component';

describe('AbotpageComponent', () => {
  let component: AbotpageComponent;
  let fixture: ComponentFixture<AbotpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbotpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbotpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
