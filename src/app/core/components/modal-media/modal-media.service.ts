import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { debounce, debounceTime, switchMap } from 'rxjs/operators';
const End_Point: string = '/wp/v2/media';

@Injectable({
  providedIn: 'root'
})
export class ModalMediaService {
  private modalState$: Subject<boolean> = new Subject();
  private apply$: Subject<void> = new Subject();
  private media$: Subject<any> = new Subject();
  private searchQuery$: Subject<string> = new Subject();
  mUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {

  }
  showModal() {
    this.modalState$.next(true);
  }
  hideModal() {
    this.modalState$.next(false);
  }
  onStateChange() {
    return this.modalState$;
  }
  onApply() {
    return this.apply$;
  }
  doApply() {
    this.apply$.next();
  }
  publishMedia(media) {
    this.media$.next(media);
  }
  subscribeMedia() {
    return this.media$;
  }
  createMedia(file) {
    let headers = new HttpHeaders();
    let formData = new FormData();
    let url: string = this.buildUrl(End_Point);
    formData.append('file', file);
    return this.http.post(url, formData, { headers: headers });
  }
  updateMedia(id: number, mediaData) {
    let url: string = this.buildUrl(End_Point);
    url = `${url}/${id}`;
    return this.http.post(url, mediaData);
  }
  getMeidaImages() {
    let url: string = this.buildUrl(End_Point);
    let params = this.buildParams({
      type: 'image',
      page: 1,
      per_page: 100
    })
    return this.http.get(url, { params: params });
  }
  searchMeidaImages() {
    return this.searchQuery$.pipe(debounceTime(1000), switchMap((query) => {
      let url: string = this.buildUrl(End_Point);
      let params = this.buildParams({
        type: 'image',
        page: 1,
        per_page: 100,
        search: query
      })
      return this.http.get(url, { params: params });
    }))
  }
  doSearch(query:string){
    this.searchQuery$.next(query);
  }
  private buildParams(params): HttpParams {
    return new HttpParams({ fromObject: params })
  }
  private buildUrl(endpoint: string): string {
    return this.mUrl.concat(endpoint);
  }
}
