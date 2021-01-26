import { TestBed } from '@angular/core/testing';

import { EdadGuard } from './edad.guard';

describe('EdadGuard', () => {
  let guard: EdadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EdadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
