import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { LibraryComponent } from './library/library.component';
import { AddNewComponent } from './add-new/add-new.component';

const routes: Routes = [
  {
    path: '', component: MediaComponent, children: [
      { path: 'library', component: LibraryComponent },
      { path: 'add-new', component: AddNewComponent },
      { path: '', redirectTo: 'library' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
