import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostOptionsComponent } from './post-options/post-options.component';
import { PostOptionsCategoriesComponent } from './post-options-categories/post-options-categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostOptionsStatusComponent } from './post-options-status/post-options-status.component';
import { PostOptionsExcerptComponent } from './post-options-excerpt/post-options-excerpt.component';
import { PostOptionsAuthorsComponent } from './post-options-authors/post-options-authors.component';
import { PostOptionsTagsComponent } from './post-options-tags/post-options-tags.component';
import { PostOptionsImageFeatureComponent } from './post-options-image-feature/post-options-image-feature.component';

@NgModule({
  declarations: [PostOptionsComponent, PostOptionsCategoriesComponent, PostOptionsStatusComponent, PostOptionsExcerptComponent, PostOptionsAuthorsComponent, PostOptionsTagsComponent, PostOptionsImageFeatureComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    PostOptionsComponent
  ]
})
export class PostOptionsModule { }
