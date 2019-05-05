import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EndPoint } from './endpoint';
import { Post } from '../data.model/post';
import { map, concatAll } from 'rxjs/operators';
import { CategoryService } from './category.service';
import { Observable, forkJoin } from 'rxjs';
import { TagService } from './tag.service';
import { UserService } from './user.service';
import { CommentService } from './comment.service';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  mUrl: string;
  constructor(private http: HttpClient, private categoryService: CategoryService, private tagService: TagService,
    private userService: UserService, private commentService: CommentService
  ) {
    this.mUrl = environment.apiUrl;
  }
  getListPosts(page: number, searchQuery?: string, state?: string) {
    if (!searchQuery) searchQuery = '';
    if (!state) state = '';
    let url: string = this.buildUrl(EndPoint.List_Posts);
    let params = this.buildParams({
      page: page,
      per_page: 10,
      status: state,
      search: searchQuery,
    })
    return this.http.get<Array<Post>>(url, { params: params }).pipe(map(posts => {
      let arrObservable: Array<Observable<any>> = [];
      posts.map((post, i) => {
        let req = this.getPostWithAdditionData(post);
        arrObservable.push(req);
      });
      return forkJoin(arrObservable);
    }), concatAll())
  }
  searchPost(searchQuery: string, page: number) {
    let url: string = this.buildUrl(EndPoint.List_Posts);
    let params = this.buildParams({
      page: page,
      per_page: 10,
      search: searchQuery
    });
    return this.http.get<Array<Post>>(url, { params: params }).pipe(map(posts => {
      let arrObservable: Array<Observable<any>> = [];
      posts.map((post, i) => {
        let req = this.getPostWithAdditionData(post);
        arrObservable.push(req);
      });
      return forkJoin(arrObservable);
    }), concatAll())
  }
  getDetailPost(id: number) {
    let url: string = this.buildUrl(EndPoint.List_Posts);
    url = `${url}/${id}`;
    return this.http.get<Post>(url);

  }
  createPost(paramsData: any) {
    let url: string = this.buildUrl(EndPoint.List_Posts);
    return this.http.post<Post>(url, paramsData);
  }
  updatePost(id: number, paramsData: any) {
    let url: string = this.buildUrl(EndPoint.List_Posts);
    url = `${url}/${id}`;
    return this.http.post<Post>(url, paramsData);
  }
  deletePost(id: number) {
    let url: string = this.buildUrl(EndPoint.List_Posts);
    url = `${url}/${id}`;
    return this.http.delete(url);
  }
  deletePosts(ids: Array<number>) {
    let arrObservale: Array<Observable<any>> = [];
    ids.map((id) => {
      let observable = this.deletePost(id);
      arrObservale.push(observable);
    });
    return forkJoin(arrObservale);
  }
  deletePermanentlyPost(id: number) {
    let url: string = this.buildUrl(EndPoint.List_Posts);
    url = `${url}/${id}?force=true`;
    return this.http.delete(url);
  }
  concatRequest(idsCategories: Array<number>, idsTag: Array<number>, idUser: number, idPost: number) {
    let reqCategories = this.categoryService.getDetailCategory(idsCategories);
    let reqTags = this.tagService.getDetailTag(idsTag);
    let reqUser = this.userService.getDetailUser(idUser);
    let reqComment = this.commentService.getDetailComment(idPost);
    return forkJoin(reqCategories, reqTags, reqUser, reqComment);
  }
  getPostWithAdditionData(post: Post): Observable<any> {
    return this.concatRequest(post.categories, post.tags, post.author, post.id).pipe(map((res) => {
      post.categories_name = res[0];
      post.tags_name = res[1];
      post.author_name = res[2];
      post.comment = res[3];
      return post;
    }));
  }
  private buildUrl(endpoint: string): string {
    return this.mUrl.concat(endpoint);
  }
  private buildParams(params): HttpParams {
    return new HttpParams({ fromObject: params })
  }
}
