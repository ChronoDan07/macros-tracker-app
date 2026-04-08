import { TestBed } from '@angular/core/testing';

import { DailySummaryService } from './daily-summary.service';

describe('DailySummaryService', () => {
  let service: DailySummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailySummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
