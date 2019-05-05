import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { LibraryComponent } from './library/library.component';
import { AddNewComponent } from './add-new/add-new.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [LibraryComponent, AddNewComponent, MediaComponent],
  imports: [
    CommonModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
