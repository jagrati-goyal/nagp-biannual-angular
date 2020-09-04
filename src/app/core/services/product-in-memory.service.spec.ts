import { TestBed } from '@angular/core/testing';

import { ProductInMemoryService } from './product-in-memory.service';

describe('ProductInMemoryService', () => {
  let service: ProductInMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductInMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
