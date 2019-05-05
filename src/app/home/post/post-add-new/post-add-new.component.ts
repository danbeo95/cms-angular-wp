import { Component, OnInit, ViewChild } from '@angular/core';
import { ParamAddNewPost } from '../../data.model/params-add-new';
import { PostService } from '../post.service';
import { Post } from '../../data.model/post';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { finalize } from 'rxjs/operators';
import { PostOptionsComponent } from '../post-options/post-options/post-options.component';
@Component({
  selector: 'app-post-add-new',
  templateUrl: './post-add-new.component.html',
  styleUrls: ['./post-add-new.component.scss']
})
export class PostAddNewComponent implements OnInit {
  mParams: ParamAddNewPost;
  postScucess: Post;
  mFormGroup: FormGroup;
  isChange: boolean;
  isLoading: boolean;
  @ViewChild('options') optionsCmp: PostOptionsComponent;
  constructor(private postService: PostService, private fb: FormBuilder, private modalService: ModalService) { }

  ngOnInit() {
    this.mParams = new ParamAddNewPost();
    this.initForm();
    this.onFormChange();
  }
  canDeactivate() {
    return this.doCheckCandeactive();
  }
  initForm() {
    this.mFormGroup = this.fb.group({
      title: new FormControl('', [Validators.required]),
      html_content: new FormControl('', [Validators.required])
    })
  }
  onFormChange() {
    this.mFormGroup.statusChanges.subscribe(() => {
      this.isChange = true;
    })
  }
  onPusblish() {
    this.doPublish();
  }
  doPublish() {
    if (this.mFormGroup.valid) {
      this.isLoading = true;
      this.mParams = this.optionsCmp.mParams;
      this.mParams.title = this.mFormGroup.get('title').value;
      this.mParams.content = this.mFormGroup.get('html_content').value;
      this.postService.createPost(this.mParams).pipe(finalize(() => { this.isLoading = false }))
        .subscribe((res) => {
          this.isChange = false;
          this.optionsCmp.isChange = false;
        }, e => {
        })
    }
  }
  
  doCheckCandeactive(): Promise<boolean> | boolean {
    if (this.isChange || this.optionsCmp.isChange) {
      return new Promise((resovle, eject) => {
        this.modalService.createModal({
          title: '',
          message: 'Leave without save your change',
          callback: (id) => {
            if (id == 1) {
              resovle(true)
            }
            resovle(false);
          }
        });
        this.modalService.showModal();
      })
    }
    return true;
  }
}
