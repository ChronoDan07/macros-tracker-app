import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesStatsComponent } from './calories-stats.component';

describe('CaloriesStatsComponent', () => {
  let component: CaloriesStatsComponent;
  let fixture: ComponentFixture<CaloriesStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaloriesStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloriesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
