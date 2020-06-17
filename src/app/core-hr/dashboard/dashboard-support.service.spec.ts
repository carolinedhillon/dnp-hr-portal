import { TestBed } from '@angular/core/testing';

import { DashboardSupportService } from './dashboard-support.service';

describe('DashboardSupportService', () => {
  let service: DashboardSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
