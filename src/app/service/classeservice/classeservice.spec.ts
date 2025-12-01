import { TestBed } from '@angular/core/testing';

import { Classeservice } from './classeservice';

describe('Classeservice', () => {
  let service: Classeservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Classeservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
