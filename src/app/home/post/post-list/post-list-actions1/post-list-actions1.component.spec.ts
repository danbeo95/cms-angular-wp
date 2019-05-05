import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListActions1Component } from './post-list-actions1.component';

describe('PostListActions1Component', () => {
  let component: PostListActions1Component;
  let fixture: ComponentFixture<PostListActions1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListActions1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListActions1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
