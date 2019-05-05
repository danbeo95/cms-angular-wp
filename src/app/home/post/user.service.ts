import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpParams } from '@angular/common/http';
import { EndPoint } from './endpoint';
import { User } from '../data.model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  mUrl:string = environment.apiUrl;
  constructor(private http:HttpClient) { 

  }
  getUserList(){
    let url: string = this.buildUrl(EndPoint.List_User);
    let params = this.buildParams({
      page:1,
      per_page:100
    });
    return this.http.get<Array<User>>(url,{params:params});
  }
  getDetailUser(id:number){
    let url: string = this.buildUrl(EndPoint.List_User);
    url = `${url}/${id}`;
    return this.http.get<User>(url);
  }
  private buildParams(params): HttpParams {
    return new HttpParams({ fromObject: params })
  }
  private buildUrl(endpoint: string): string {
    return this.mUrl.concat(endpoint);
  }
}
