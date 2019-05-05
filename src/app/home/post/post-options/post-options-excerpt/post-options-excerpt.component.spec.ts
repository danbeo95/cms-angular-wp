import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOptionsExcerptComponent } from './post-options-excerpt.component';

describe('PostOptionsExcerptComponent', () => {
  let component: PostOptionsExcerptComponent;
  let fixture: ComponentFixture<PostOptionsExcerptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOptionsExcerptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOptionsExcerptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
