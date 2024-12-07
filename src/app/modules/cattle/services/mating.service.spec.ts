import { TestBed } from '@angular/core/testing';

import { MatingService } from './mating.service';

describe('MatingService', () => {
  let service: MatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
