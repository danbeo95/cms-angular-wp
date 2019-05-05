import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostQuickEditCategoryComponent } from './post-quick-edit-category.component';

describe('PostQuickEditCategoryComponent', () => {
  let component: PostQuickEditCategoryComponent;
  let fixture: ComponentFixture<PostQuickEditCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostQuickEditCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostQuickEditCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
