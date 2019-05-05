import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpParams } from '@angular/common/http';
import { EndPoint } from './endpoint';
import { User } from '../data.model/user';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  mUrl:string = environment.apiUrl;
  constructor(private http:HttpClient) { 

  }

  getDetailComment(postId:number){
    let url: string = this.buildUrl(EndPoint.List_Comments);
    let params = this.buildParams({
      post:postId
    })
    return this.http.get<any>(url,{params:params});
  }
  private buildParams(params): HttpParams {
    return new HttpParams({ fromObject: params })
  }
  private buildUrl(endpoint: string): string {
    return this.mUrl.concat(endpoint);
  }
}
