import { TestBed, inject } from '@angular/core/testing';

import { CarerService } from './carer.service';

describe('CarerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarerService]
    });
  });

  it('should be created', inject([CarerService], (service: CarerService) => {
    expect(service).toBeTruthy();
  }));
});
