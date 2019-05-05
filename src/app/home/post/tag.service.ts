import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { EndPoint } from './endpoint';
import { Tag } from '../data.model/tag';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  mUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {

  }
  getDetailTag(ids: Array<number>) {
    let url: string = this.buildUrl(EndPoint.List_Tags);
    let params = this.buildParams({
      page: 1,
      per_page: 100,
      include: ids.join(',')
    });
    return this.http.get<Array<Tag>>(url, { params: params });
  }
  searchTags(searchQuery:string){
    let url: string = this.buildUrl(EndPoint.List_Tags);
    let params = this.buildParams({
      page: 1,
      per_page: 100,
      search:searchQuery
    });
    return this.http.get<Array<Tag>>(url, { params: params });
  }
  createTag(tagName: string) {
    let url: string = this.buildUrl(EndPoint.List_Tags);
    let params = this.buildParams({
      name: tagName
    });
    return this.http.post(url, params).pipe(catchError((e: HttpErrorResponse) => {
      if (e.status === 400) {
        return of(e.error.data.term_id);
      }
    }), map(tag => {
      return tag.id || tag
    }));
  }
  createTags(tags: Array<string>) {
    let arrObservale: Array<Observable<any>> = [];
    tags.map((tag) => {
      arrObservale.push(this.createTag(tag));
    });
    return forkJoin(arrObservale);
  }
  private buildParams(params): HttpParams {
    return new HttpParams({ fromObject: params })
  }
  private buildUrl(endpoint: string): string {
    return this.mUrl.concat(endpoint);
  }
}
