import { TestBed } from '@angular/core/testing';

import { CaloriesGoalService } from './calories-goal.service';

describe('CaloriesGoalService', () => {
  let service: CaloriesGoalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaloriesGoalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
