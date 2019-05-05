import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListActionsComponent } from './post-list-actions.component';

describe('PostListActionsComponent', () => {
  let component: PostListActionsComponent;
  let fixture: ComponentFixture<PostListActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
