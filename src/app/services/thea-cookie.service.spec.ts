import { TestBed } from '@angular/core/testing';

import { TheaCookieService } from './thea-cookie.service';

describe('TheaCookieService', () => {
  let service: TheaCookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheaCookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
