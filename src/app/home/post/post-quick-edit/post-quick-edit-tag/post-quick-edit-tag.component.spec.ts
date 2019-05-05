import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostQuickEditTagComponent } from './post-quick-edit-tag.component';

describe('PostQuickEditTagComponent', () => {
  let component: PostQuickEditTagComponent;
  let fixture: ComponentFixture<PostQuickEditTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostQuickEditTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostQuickEditTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
