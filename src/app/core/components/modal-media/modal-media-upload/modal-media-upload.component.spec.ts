import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMediaUploadComponent } from './modal-media-upload.component';

describe('ModalMediaUploadComponent', () => {
  let component: ModalMediaUploadComponent;
  let fixture: ComponentFixture<ModalMediaUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMediaUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMediaUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
