import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderConfig, POSITION, SPINNER } from 'ngx-ui-loader';
import { NgxEditorModule } from 'ngx-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { ngfModule, ngf } from "angular-file"

import { ComponentsModule } from './components/components.module';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.chasingDots,
  pbThickness: 5, // progress bar thickness
};
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgbModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgxUiLoaderModule,
    NgxEditorModule,
    TagInputModule,
    ngfModule,
  ],
  providers: [
  ]
})
export class SharedModule { }
