import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOptionsAuthorsComponent } from './post-options-authors.component';

describe('PostOptionsAuthorsComponent', () => {
  let component: PostOptionsAuthorsComponent;
  let fixture: ComponentFixture<PostOptionsAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOptionsAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOptionsAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
