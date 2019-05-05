import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoaderService } from './core/services/loader-service/loader.service';

export function configProvider(_configService: LoaderService) {
  return () => {
    console.log(_configService);
    return _configService.load();
  }
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    ModalModule.forRoot()
  ],
  providers: [
    // {provide:APP_INITIALIZER,useFactory:configProvider,deps:[LoaderService],multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
