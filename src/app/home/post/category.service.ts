import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EndPoint } from './endpoint';
import { environment } from 'src/environments/environment';
import { Category } from '../data.model/category';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  mUrl: string = environment.apiUrl;
  filterName$: Subject<string>;
  constructor(private http: HttpClient) {
    this.filterName$ = new Subject();
  }
  getCategoriesList() {
    let url: string = this.buildUrl(EndPoint.List_Categories);
    let params = this.buildParams({
      page: 1,
      per_page: 100
    });
    return this.http.get<Array<Category>>(url, { params: params });
  }
  getDetailCategory(ids:Array<number>){
    let url: string = this.buildUrl(EndPoint.List_Categories);
    let params = this.buildParams({
      page: 1,
      per_page: 100,
      include:ids.join(',')
    });
    return this.http.get<Array<Category>>(url, { params: params });

  }
  searchCategories() {
    return this.filterName$.pipe(switchMap((name) => {
      let url: string = this.buildUrl(EndPoint.List_Categories);
      let params = this.buildParams({
        page: 1,
        per_page: 100,
        search: name
      })
      return this.http.get<Array<Category>>(url, { params: params });
    }),
      debounceTime(1000),
      distinctUntilChanged()
    );
  }
  doFilterName(name:string){
    this.filterName$.next(name)
  }
  private buildUrl(endpoint: string): string {
    return this.mUrl.concat(endpoint);
  }
  private buildParams(params): HttpParams {
    return new HttpParams({ fromObject: params })
  }
}
