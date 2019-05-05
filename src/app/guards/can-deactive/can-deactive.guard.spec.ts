import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactiveGuard } from './can-deactive.guard';

describe('CanDeactiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactiveGuard]
    });
  });

  it('should ...', inject([CanDeactiveGuard], (guard: CanDeactiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
