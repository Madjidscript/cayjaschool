import { TestBed } from '@angular/core/testing';

import { Proffeseuservice } from './proffeseuservice';

describe('Proffeseuservice', () => {
  let service: Proffeseuservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Proffeseuservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
