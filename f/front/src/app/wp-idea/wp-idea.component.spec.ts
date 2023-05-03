import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpIdeaComponent } from './wp-idea.component';

describe('WpIdeaComponent', () => {
  let component: WpIdeaComponent;
  let fixture: ComponentFixture<WpIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpIdeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
