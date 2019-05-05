import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';

import { httpInterceptorProviders } from './services/http-interceptor';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule
    
  ],
  exports:[
    ComponentsModule
  ],
  providers:[
    httpInterceptorProviders
  ]
})
export class CoreModule { }
