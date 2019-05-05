import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMediaLibraryDetailComponent } from './modal-media-library-detail.component';

describe('ModalMediaLibraryDetailComponent', () => {
  let component: ModalMediaLibraryDetailComponent;
  let fixture: ComponentFixture<ModalMediaLibraryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMediaLibraryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMediaLibraryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
