import { TestBed } from '@angular/core/testing';

import { RiskFactorService } from './risk-factor.service';

describe('RiskFactorService', () => {
  let service: RiskFactorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskFactorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
