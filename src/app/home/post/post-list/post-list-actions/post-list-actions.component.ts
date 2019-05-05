import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from 'src/app/home/data.model/post';
import { PostService } from '../../post.service';
import { LoaderService } from '../../../../core/services/loader-service/loader.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
@Component({
  selector: 'app-post-list-actions',
  templateUrl: './post-list-actions.component.html',
  styleUrls: ['./post-list-actions.component.scss']
})
export class PostListActionsComponent implements OnInit {
  @Output('onMoveTrashChange') onMoveTrashChange: EventEmitter<Post> = new EventEmitter();
  @Output('onQuickEditChange') onQuickEditChange: EventEmitter<number> = new EventEmitter();
  @Output('onDeleteChange') onDeleteChange: EventEmitter<Post> = new EventEmitter();
  @Output('onRestoreChange') onRestoreChange: EventEmitter<Post> = new EventEmitter();

  @Input('post') mPost: Post;
  constructor(private postService: PostService, private modalService: ModalService) { }

  ngOnInit() {

  }
  onClickTrash() {
    let id = this.mPost.id;
    this.postService.deletePost(id).subscribe((res) => {
      this.onResTrash(res);
    })
  }
  onResTrash(res) {
    this.onMoveTrashChange.emit(res);
  }
  onClickQuickEdit() {
    this.onQuickEditChange.emit(this.mPost.id);
  }
  onClickDelete() {
    this.modalService.createModal({
      title: '',
      message: `Do you want delete ${this.mPost.title.rendered} ?`,
      callback: (id) => {
        if (id === 1) this.doDelete();
      }
    });
    this.modalService.showModal();
  }
  doDelete() {
    this.postService.deletePermanentlyPost(this.mPost.id).subscribe((res) => {
      this.onResDelete();
    })
  }
  onResDelete() {
    this.onDeleteChange.emit(this.mPost);
  }
  onClickRestore() {
    this.modalService.createModal({
      title: '',
      message: `Do you want restore ${this.mPost.title.rendered} ?`,
      callback: (id) => {
        if (id === 1) this.doRestore();
      }
    });
    this.modalService.showModal();
  }
  doRestore() {
    this.postService.updatePost(this.mPost.id, { status: 'publish' }).subscribe((res) => {
      this.onResRestore(res);
    })
  }
  onResRestore(post: Post) {
    this.onRestoreChange.emit(post);
  }
}
