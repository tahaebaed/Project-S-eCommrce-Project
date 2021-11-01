import { TestBed } from '@angular/core/testing';

import { ProdcutService } from './prodcut.service';

describe('ProdcutService', () => {
  let service: ProdcutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdcutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
