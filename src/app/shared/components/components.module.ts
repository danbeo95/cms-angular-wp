import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BtnLoadingComponent } from './btn-loading/btn-loading.component';

@NgModule({
  declarations: [NavbarComponent, ModalComponent, BtnLoadingComponent],
  imports: [
    CommonModule,
    NgbModule,
    ModalModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    ModalComponent,
    BtnLoadingComponent
  ]
})
export class ComponentsModule { }
