import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroAppComponent } from './intro-app.component';

describe('IntroAppComponent', () => {
  let component: IntroAppComponent;
  let fixture: ComponentFixture<IntroAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
