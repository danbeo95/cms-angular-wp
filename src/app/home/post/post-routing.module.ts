import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostAddNewComponent } from './post-add-new/post-add-new.component';
import { PostTagsComponent } from './post-tags/post-tags.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { CanDeactiveGuard } from '../../guards/can-deactive/can-deactive.guard';
const routes: Routes = [
  {
    path: '', component: PostComponent, children: [
      {path:'list',component:PostListComponent},
      {path:'add-new',component:PostAddNewComponent,canDeactivate:[CanDeactiveGuard]},
      {path:'edit/:id',component:PostEditComponent},
      {path:'tags',component:PostTagsComponent},
      {path:'',redirectTo:'list',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
