import { Injectable } from '@angular/core';
import  { HttpInterceptor,HttpRequest,HttpHandler, HttpHeaders  } from '@angular/common/http';
import { UserCookieService } from '../user-cookie.service';

@Injectable({
  providedIn:'root'
})
export class HttpInterceptorService implements HttpInterceptor  {

  constructor(private userCookieService:UserCookieService) { 

  }
  intercept(req:HttpRequest<any>,next:HttpHandler){
    if(this.userCookieService.hasCookie()){
      console.log('ok');
      let token = this.userCookieService.getCookie().token;
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return next.handle(req.clone({
        headers:header
      }));
    }
    // const authReq = req.clone({
    //   headers:new HttpHeaders().set('Authorization',`Bearer`)

    // });
    return next.handle(req.clone());
  }
 
}
