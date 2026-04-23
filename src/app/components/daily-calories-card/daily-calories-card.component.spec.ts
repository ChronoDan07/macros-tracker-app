import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCaloriesCardComponent } from './daily-calories-card.component';

describe('DailyCaloriesCardComponent', () => {
  let component: DailyCaloriesCardComponent;
  let fixture: ComponentFixture<DailyCaloriesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyCaloriesCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DailyCaloriesCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
