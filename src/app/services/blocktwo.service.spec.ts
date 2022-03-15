import { TestBed } from '@angular/core/testing';

import { BlocktwoService } from './blocktwo.service';

describe('BlocktwoService', () => {
  let service: BlocktwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocktwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
