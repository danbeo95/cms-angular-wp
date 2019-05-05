import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private loaderService:NgxUiLoaderService ) { 

  }
  showLoading(){
    this.loaderService.start();
  }
  hideLoading(){
    this.loaderService.stop();
  }
  load(){
    return new Promise((res,eject)=>{
      setTimeout(()=>{res(true)},4000)
    })
  }
}
