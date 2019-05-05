import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOptionsStatusComponent } from './post-options-status.component';

describe('PostOptionsStatusComponent', () => {
  let component: PostOptionsStatusComponent;
  let fixture: ComponentFixture<PostOptionsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOptionsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOptionsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
