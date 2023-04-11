import { TestBed } from '@angular/core/testing';

import { ItemCountryService } from './item-country.service';

describe('ItemCountryService', () => {
  let service: ItemCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
