import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';
const User_Cookie_Name:string = 'usercookie';
const Expired_Time = 1;
@Injectable({
  providedIn: 'root'
})
export class UserCookieService {

  constructor(private cookieService: CookieService) { 

  }
  setCookie(userData){
    let expiredDate = this.getExpiredTime();
    userData = JSON.stringify(userData);
    this.cookieService.set(User_Cookie_Name,userData,expiredDate,'/');
  }
  getCookie(){
    let userCookie = this.cookieService.get(User_Cookie_Name);
    return JSON.parse(userCookie);
  }
  removeCookie(){
    this.cookieService.delete(User_Cookie_Name,'/');
  }
  hasCookie():boolean{
    return this.cookieService.check(User_Cookie_Name);
  }
  private getExpiredTime(){
    let a = moment(new Date()).add(Expired_Time,'days').toDate();
    return moment(new Date()).add(Expired_Time,'days').toDate();
  }
}
