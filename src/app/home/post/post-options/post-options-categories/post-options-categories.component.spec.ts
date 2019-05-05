import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOptionsCategoriesComponent } from './post-options-categories.component';

describe('PostOptionsCategoriesComponent', () => {
  let component: PostOptionsCategoriesComponent;
  let fixture: ComponentFixture<PostOptionsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOptionsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOptionsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
