import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesGoalComponent } from './calories-goal.component';

describe('CaloriesGoalComponent', () => {
  let component: CaloriesGoalComponent;
  let fixture: ComponentFixture<CaloriesGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaloriesGoalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloriesGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
