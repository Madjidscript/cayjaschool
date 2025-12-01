import { TestBed } from '@angular/core/testing';

import { Doc } from './doc';

describe('Doc', () => {
  let service: Doc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Doc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
