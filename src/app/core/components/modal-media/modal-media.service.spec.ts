import { TestBed } from '@angular/core/testing';

import { ModalMediaService } from './modal-media.service';

describe('ModalMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalMediaService = TestBed.get(ModalMediaService);
    expect(service).toBeTruthy();
  });
});
