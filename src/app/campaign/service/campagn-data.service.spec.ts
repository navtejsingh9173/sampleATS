import { TestBed } from '@angular/core/testing';

import { CampagnDataService } from './campagn-data.service';

describe('CampagnDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampagnDataService = TestBed.get(CampagnDataService);
    expect(service).toBeTruthy();
  });
});
