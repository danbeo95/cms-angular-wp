import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ShareDataService } from 'src/app/core/services/share-data.service';
import { PostService } from '../../post.service';
import { Post } from '../../../.../../../home/data.model/post';

@Component({
  selector: 'app-post-list-actions1',
  templateUrl: './post-list-actions1.component.html',
  styleUrls: ['./post-list-actions1.component.scss']
})
export class PostListActions1Component implements OnInit {
  mPostIdsDelete:Array<number> = [];
  mActions:Array<{name:string,value:string}> = [
    {name:'Actions',value:''},
    {name:'Move Trash',value:'trash'}
  ];
  mSelectModel:string = '';
  @Output('onDeleteChange') onDeleteChange:EventEmitter<Array<Post>> = new EventEmitter();
  constructor(private shareDataService:ShareDataService,private postService:PostService) { }

  ngOnInit() {
    this.onPostDeletesChange();
  }
  onPostDeletesChange(){
    this.shareDataService.getSharePostIdsDelete().subscribe((ids)=>{
      this.mPostIdsDelete = [];
      this.mPostIdsDelete = this.mPostIdsDelete.concat(ids);
    })
  }
  onSelect(){
    switch (this.mSelectModel) {
      case 'trash':
        this.doDeletePosts();
        break;
      default:
        break;
    }
  }
  doDeletePosts(){
    this.postService.deletePosts(this.mPostIdsDelete).subscribe((res)=>{
      this.onResDelete(res);
    })
  }
  onResDelete(posts:Array<Post>){
    this.shareDataService.sharePostDeleted(posts);
    this.mSelectModel = '';
  }
}
