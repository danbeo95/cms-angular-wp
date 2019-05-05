import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PostService } from '../../post.service';
import { Post } from '../../../../home/data.model/post';
import { LoaderService } from '../../../../core/services/loader-service/loader.service';
import { FormControl, FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { ShareDataService } from 'src/app/core/services/share-data.service';
import * as _ from 'lodash';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-post-list-table',
  templateUrl: './post-list-table.component.html',
  styleUrls: ['./post-list-table.component.scss']
})
export class PostListTableComponent implements OnInit, OnChanges {
  @Input('posts') mListPosts: Array<Post> = [];
  mFormGroup: FormGroup;
  isLoading: boolean = true;
  mPostIdQuickEdit: number = 0;
  constructor(private postService: PostService, private loaderService: LoaderService,
    private fb: FormBuilder,
    private shareDataService: ShareDataService, private modalService: ModalService) { }

  ngOnInit() {
    this.onMoveTrashsChange();
  }
  ngOnChanges() {
    this.isLoading = false;
    this.initForm();
    this.createForm();
  }
  initForm() {
    this.mFormGroup = this.fb.group({
      check_all: new FormControl(false),
      posts: this.fb.array([])
    })
  }
  createForm() {
    this.resetForm();
    this.mListPosts.map((post, i) => {
      this.postsForm.push(new FormControl(false));
    });
  }
  resetForm() {
    let i = this.postsForm.length;
    while (i >= 0) {
      this.postsForm.removeAt(i);
      i = i - 1;
    }
  }
  getIds(): Array<number> {
    let ids: Array<number> = [];
    this.mListPosts.map((post, i) => {
      if (this.postsForm.get(i.toString()).value) {
        ids.push(post.id);
      }
    });
    return ids;
  }
  onDeleteSucess(event: Post) {
    let index: number = this.mListPosts.findIndex((post) => post.id == event.id);
    this.mListPosts.splice(index, 1);
  }
  onClickCheckAll() {
    this.doCheckAll();
    this.shareDataService.sharePostIdsDelete(this.getIds());
  }
  doCheckAll() {
    let checkAll: boolean = this.checkAllForm.value;
    if (checkAll) {
      this.mListPosts.map((post, i) => {
        this.postsForm.get(i.toString()).setValue(true);
      })
    }
    else {
      this.mListPosts.map((post, i) => {
        this.postsForm.get(i.toString()).setValue(false);
      })
    }
  }
  onClickCheckPost() {
    this.doCheckPost();
    this.shareDataService.sharePostIdsDelete(this.getIds());
  }
  doCheckPost() {
    let count: number = 0;
    let total = this.mListPosts.length;
    this.mListPosts.map((post, i) => {
      if (this.postsForm.get(i.toString()).value) {
        count = count + 1;
      }
    });
    if (count == total) { this.checkAllForm.setValue(true) }
    else { this.checkAllForm.setValue(false) }
    ;
  }
  get checkAllForm(): FormControl {
    return this.mFormGroup.get('check_all') as FormControl;
  }
  get postsForm(): FormArray {
    return this.mFormGroup.get('posts') as FormArray;
  }
  onMoveTrashsChange() {
    this.shareDataService.getSharePostDeleted().subscribe((posts) => {
      this.onResMoveTrashs(posts);
    });
  }
  onResMoveTrashs(posts: Array<any>) {
    posts.map((post, i) => {
      this.mListPosts.map((p, j) => {
        if (post.id == p.id) {
          this.mListPosts.splice(j, 1);
          this.postsForm.removeAt(j);
        }
      })
    })
  }
  onMoveTrashChange(event:Post){
    this.removePost(event);
  }
  onQuickEditChange(event) {
    this.mPostIdQuickEdit = event;
  }
  onCancelQuickEdit(event) {
    this.mPostIdQuickEdit = -1;
  }
  onDeleteChange(event:Post){
    this.removePost(event);
  }
  onRestoreChange(event:Post){
    this.removePost(event);
  }
  onUpdateSucess(event: Post) {
    let i: number = this.mListPosts.findIndex((post, i) => {
      return post.id === event.id;
    });
    this.mListPosts[i] = event;
    this.mPostIdQuickEdit = -1;
  }
  removePost(post:Post){
    let i: number = this.mListPosts.findIndex((post, i) => {
      return post.id === post.id;
    });
    this.mListPosts.splice(i,1);
  }
}
