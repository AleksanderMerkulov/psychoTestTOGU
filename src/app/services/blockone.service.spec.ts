import { TestBed } from '@angular/core/testing';

import { BlockoneService } from './blockone.service';

describe('BlockoneService', () => {
  let service: BlockoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
