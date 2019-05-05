import { Component, OnInit,Input } from '@angular/core';
import { ParamAddNewPost } from '../../../../home/data.model/params-add-new';
import { Post } from '../../../../home/data.model/post';

@Component({
  selector: 'app-post-options',
  templateUrl: './post-options.component.html',
  styleUrls: ['./post-options.component.scss']
})
export class PostOptionsComponent implements OnInit {
  @Input('post') mPost:Post
  mParams:ParamAddNewPost;
  isChange:boolean;
  constructor() { }
  
  
  ngOnInit() {
    this.mParams = new ParamAddNewPost();
  }
  onCategoriesChange(event){
    this.isChange = true;
    this.mParams.categories = event;
    console.log(event);
  }
  onStatusChange(event){
    this.isChange = true;
    this.mParams.status = event;
    console.log(event);
  }
  onExcerptChange(event){
    this.isChange = true;
    this.mParams.excerpt = event;
    console.log(event);
  }
  onAuthorsChange(event){
    this.mParams.author = event;
    console.log(event);
  }
  onTagsChange(event){
    console.log(event);
  }
  onImageFeatureChange(event){
    this.isChange = true;
    this.mParams.featured_media = event;
    console.log(event);
  }
}
