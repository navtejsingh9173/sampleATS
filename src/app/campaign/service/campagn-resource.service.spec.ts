import { TestBed } from '@angular/core/testing';

import { CampagnResourceService } from './campagn-resource.service';

describe('CampagnResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampagnResourceService = TestBed.get(CampagnResourceService);
    expect(service).toBeTruthy();
  });
});
