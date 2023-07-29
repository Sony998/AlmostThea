import { TestBed } from '@angular/core/testing';

import { ProductUpdateButtonServiceService } from './product-update-button-service.service';

describe('ProductUpdateButtonServiceService', () => {
  let service: ProductUpdateButtonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductUpdateButtonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
