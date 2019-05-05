import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../../../home/data.model/post';
import { LoaderService } from '../../../core/services/loader-service/loader.service';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  mListPosts:Array<Post>=[];
  mPage:number = 1;
  canNextPage:boolean = true;
  mSearchQuery:string = '';
  mSate:string;
  isLoading:boolean=false;
  constructor(private activedRoute:ActivatedRoute,private loaderService:LoaderService,private postService:PostService) { }

  ngOnInit() {
   this.onLoadData();
  }
  onLoadData() {
    this.mListPosts = [];
    this.isLoading = true;
    this.postService.getListPosts(this.mPage,this.mSearchQuery,this.mSate).pipe(finalize(() => {
      this.isLoading  = false;
    })).subscribe((res) => {
      this.mListPosts = this.mListPosts.concat(res);
    },e=>{
      this.canNextPage = false;
    })
  }
  onNextChange(event){
    this.mPage = event;
    this.onLoadData();
  }
  onPrevChange(event){
    this.mPage = event;
    this.onLoadData();
  }
  onSearchChange(event){
    this.mSearchQuery = event;
    this.mPage = 1;
    this.onLoadData();
  }
  onStateChange(event){
    this.mPage = 1;
    this.mSate = event;
    this.onLoadData();
  }
}
