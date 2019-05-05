import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostQuickEditCommomComponent } from './post-quick-edit-commom.component';

describe('PostQuickEditCommomComponent', () => {
  let component: PostQuickEditCommomComponent;
  let fixture: ComponentFixture<PostQuickEditCommomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostQuickEditCommomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostQuickEditCommomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
