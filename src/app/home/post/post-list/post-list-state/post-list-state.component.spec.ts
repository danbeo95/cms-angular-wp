import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListStateComponent } from './post-list-state.component';

describe('PostListStateComponent', () => {
  let component: PostListStateComponent;
  let fixture: ComponentFixture<PostListStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
