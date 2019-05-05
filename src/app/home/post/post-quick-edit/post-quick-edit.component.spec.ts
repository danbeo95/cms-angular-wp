import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostQuickEditComponent } from './post-quick-edit.component';

describe('PostQuickEditComponent', () => {
  let component: PostQuickEditComponent;
  let fixture: ComponentFixture<PostQuickEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostQuickEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostQuickEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
