import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { EndPoint } from './auth/endpoint';
import { UserCookieService } from '../core/services/user-cookie.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mUrl: string = environment.apiUrl;
  constructor(private http: HttpClient, private userCookieService: UserCookieService
  ) {

  }
  login(userData: any) {
    let url: string = this.buildUrl(EndPoint.Auth);
    return this.http.post(url, userData);
  }

  setCookie(userData) {
    this.userCookieService.setCookie(userData);
  }
  // build url
  private buildUrl(endpoint: string) {
    return this.mUrl.concat(endpoint);
  }
}
