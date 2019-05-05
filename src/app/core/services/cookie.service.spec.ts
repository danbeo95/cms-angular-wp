import { TestBed } from '@angular/core/testing';

import { UserCookieService } from './user-cookie.service';

describe('CookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCookieService = TestBed.get(UserCookieService);
    expect(service).toBeTruthy();
  });
});
