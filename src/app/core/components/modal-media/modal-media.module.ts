import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { ModalMediaComponent } from './modal-media.component';
import { ModalMediaLibraryComponent } from './modal-media-library/modal-media-library.component';
import { ModalMediaUploadComponent } from './modal-media-upload/modal-media-upload.component';
import { ModalMediaLibraryDetailComponent } from './modal-media-library-detail/modal-media-library-detail.component';

@NgModule({
    declarations:[
        ModalMediaComponent,
        ModalMediaLibraryComponent,
        ModalMediaUploadComponent,
        ModalMediaLibraryDetailComponent
    ],
    imports:[
        CommonModule,
        SharedModule
    ],
    exports:[
        ModalMediaComponent
    ]
})
export class ModalMediaModule{}