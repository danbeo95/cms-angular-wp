import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMediaLibraryComponent } from './modal-media-library.component';

describe('ModalMediaLibraryComponent', () => {
  let component: ModalMediaLibraryComponent;
  let fixture: ComponentFixture<ModalMediaLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMediaLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMediaLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
