import { TestBed } from '@angular/core/testing';

import { JanserveService } from './janserve.service';

describe('JanserveService', () => {
  let service: JanserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JanserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
