import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddNewComponent } from './post-add-new.component';

describe('PostAddNewComponent', () => {
  let component: PostAddNewComponent;
  let fixture: ComponentFixture<PostAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
