import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOptionsTagsComponent } from './post-options-tags.component';

describe('PostOptionsTagsComponent', () => {
  let component: PostOptionsTagsComponent;
  let fixture: ComponentFixture<PostOptionsTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOptionsTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOptionsTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
