import { Component, OnInit,Input,OnChanges, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../../home/data.model/post';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { UserService } from '../../user.service';
import { User } from 'src/app/home/data.model/user';
@Component({
  selector: 'app-post-quick-edit-commom',
  templateUrl: './post-quick-edit-commom.component.html',
  styleUrls: ['./post-quick-edit-commom.component.scss']
})
export class PostQuickEditCommomComponent implements OnInit,OnChanges {
  @Input('post') mPost:Post;
  @Output('onChange') onChange:EventEmitter<any> = new EventEmitter();
  mFormGroup:FormGroup;
  mUsers:Array<User> = [];
  constructor(private fb:FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.getUserList();
  }
  ngOnChanges(){
    this.initForm();
  }
  initForm(){
    this.mFormGroup = this.fb.group({
      title:new FormControl(this.mPost.title.rendered),
      slug:new FormControl(this.mPost.slug),
      author:new FormControl(this.mPost.author),
      private:new FormControl(this.mPost.status=='private'?true:false)
    });
    this.onChange.emit(this.mFormGroup.value);
    this.mFormGroup.statusChanges.subscribe(res=>{
      this.onChange.emit(this.mFormGroup.value);
    })
  }
  getUserList(){
    this.userService.getUserList().subscribe((users)=>{
      this.mUsers = this.mUsers.concat(users);
    })
  }
}
