import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostAddNewComponent } from './post-add-new/post-add-new.component';
import { PostTagsComponent } from './post-tags/post-tags.component';
import { PostComponent } from './post/post.component';
import { PostListTableComponent } from './post-list/post-list-table/post-list-table.component';
import { PostListPaginationComponent } from './post-list/post-list-pagination/post-list-pagination.component';
import { PostSearchComponent } from './post-list/post-search/post-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostListStateComponent } from './post-list/post-list-state/post-list-state.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListActionsComponent } from './post-list/post-list-actions/post-list-actions.component';
import { PostListActions1Component } from './post-list/post-list-actions1/post-list-actions1.component';
import { PostQuickEditComponent } from './post-quick-edit/post-quick-edit.component';
import { PostQuickEditCommomComponent } from './post-quick-edit/post-quick-edit-commom/post-quick-edit-commom.component';
import { PostQuickEditCategoryComponent } from './post-quick-edit/post-quick-edit-category/post-quick-edit-category.component';
import { PostQuickEditTagComponent } from './post-quick-edit/post-quick-edit-tag/post-quick-edit-tag.component';


import { PostOptionsModule } from './post-options/post-options.module';


@NgModule({
  declarations: [PostListComponent, PostAddNewComponent, PostTagsComponent, PostComponent,
    PostListTableComponent,
    PostListPaginationComponent,
    PostSearchComponent,
    PostListStateComponent,
    PostEditComponent,
    PostListActionsComponent,
    PostListActions1Component,
    PostQuickEditComponent,
    PostQuickEditCommomComponent,
    PostQuickEditCategoryComponent,
    PostQuickEditTagComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    PostOptionsModule
  ]
})
export class PostModule { }
