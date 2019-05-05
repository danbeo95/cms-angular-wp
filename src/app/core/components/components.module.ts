import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalMediaModule } from './modal-media/modal-media.module';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule
  ],
  exports:[ModalMediaModule]
})
export class ComponentsModule { }
