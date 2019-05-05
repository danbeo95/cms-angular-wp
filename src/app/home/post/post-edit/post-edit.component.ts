import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../core/services/loader-service/loader.service';
import { PostService } from '../post.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Post } from '../../data.model/post';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  constructor(private loaderService:LoaderService,private postService:PostService,private activedRouted:ActivatedRoute) { }
  mPost:Post;
  title:string;
  htmlContent:any;
  ngOnInit() {
    this.onLoadData();
  }
  onLoadData(){
    let id = this.activedRouted.snapshot.params.id;
    // this.loaderService.showLoading();
    this.postService.getDetailPost(id).subscribe((res)=>{
      this.mPost = res;
      this.onResPost(res);
      this.loaderService.hideLoading();
    })
  }
  onResPost(post:Post){
    this.title = post.title.rendered;
    this.htmlContent = post.content.rendered;
  }
}
