import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../data.model/post';
import { PostService } from '../post.service';
import { finalize, map } from 'rxjs/operators';
import { CategoryService } from '../category.service';
import { TagService } from '../tag.service';

import * as _ from 'lodash';
@Component({
  selector: 'app-post-quick-edit',
  templateUrl: './post-quick-edit.component.html',
  styleUrls: ['./post-quick-edit.component.scss']
})
export class PostQuickEditComponent implements OnInit {

  constructor(private postService: PostService, private categoryService: CategoryService, private tagService: TagService) { }
  @Input('post') mPost: Post;
  @Output('onCancel') onCancel: EventEmitter<void> = new EventEmitter();
  @Output('onSucess') onScucess: EventEmitter<Post> = new EventEmitter();
  mPostUpdate: any;
  mTags: Array<string> = [];
  isLoading: boolean;
  ngOnInit() {
  }
  onClickCancel() {
    this.onCancel.emit();
  }
  onEditCommomChange(event) {
    this.mPostUpdate = event;
  }
  onCategoriesChange(event) {
    this.mPostUpdate.categories = event;
  }
  onClickSave() {
    this.isLoading = true;
    this.doCreateTags().pipe(finalize(()=>{this.isLoading = false})).subscribe((ids) => {
      this.mPostUpdate.tags = this.mPost.tags.concat(ids);
      this.doUpdatePost();
    },e=>{
      console.log(e);
    })
  }
  onTagsChange(event: Array<string>) {
    this.mTags = _.differenceWith(event, this.mPost.tags_name, (a, b) => {
      return a == b.name;
    });
  }
  doCreateTags() {
    return this.tagService.createTags(this.mTags);
  }
  doUpdatePost() {
    let id: number = this.mPost.id;
    this.postService.updatePost(id, this.mPostUpdate).subscribe((res) => {
      this.onResUpdate(res);
    })
  }
  onResUpdate(post: Post) {
    this.postService.getPostWithAdditionData(post).pipe((finalize(() => {
      this.isLoading = false;
    }))).subscribe((res) => {
      this.onScucess.emit(res);
    })
  }
}
