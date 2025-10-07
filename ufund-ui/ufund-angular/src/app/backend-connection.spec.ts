import { TestBed } from '@angular/core/testing';

import { BackendConnection } from './backend-connection';

describe('BackendConnection', () => {
  let service: BackendConnection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendConnection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
