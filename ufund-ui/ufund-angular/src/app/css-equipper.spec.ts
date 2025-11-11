import { TestBed } from '@angular/core/testing';

import { CssEquipper } from './css-equipper';

describe('CssEquipper', () => {
  let service: CssEquipper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssEquipper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
