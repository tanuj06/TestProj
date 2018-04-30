import { TestBed, inject } from '@angular/core/testing';

import { VerifyDataService } from './verify-data.service';

describe('VerifyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifyDataService]
    });
  });

  it('should be created', inject([VerifyDataService], (service: VerifyDataService) => {
    expect(service).toBeTruthy();
  }));
});
