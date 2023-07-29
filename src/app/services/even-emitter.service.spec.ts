import { TestBed } from '@angular/core/testing';

import { EvenEmitterService } from './even-emitter.service';

describe('EvenEmitterService', () => {
  let service: EvenEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
