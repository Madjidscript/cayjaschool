import { TestBed } from '@angular/core/testing';

import { Actualité } from './actualité';

describe('Actualité', () => {
  let service: Actualité;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Actualité);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
