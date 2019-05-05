import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOptionsImageFeatureComponent } from './post-options-image-feature.component';

describe('PostOptionsImageFeatureComponent', () => {
  let component: PostOptionsImageFeatureComponent;
  let fixture: ComponentFixture<PostOptionsImageFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOptionsImageFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOptionsImageFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
