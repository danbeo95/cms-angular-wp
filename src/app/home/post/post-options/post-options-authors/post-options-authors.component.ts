import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../../../home/data.model/user';
import { UserCookieService } from '../../../../core/services/user-cookie.service';
@Component({
  selector: 'app-post-options-authors',
  templateUrl: './post-options-authors.component.html',
  styleUrls: ['./post-options-authors.component.scss']
})
export class PostOptionsAuthorsComponent implements OnInit {
  @Output('onChange') onChange:EventEmitter<number> = new EventEmitter();
  mUsers:Array<User> = [];
  userModel:number = 1;
  constructor(private userService:UserService,private userCookieService:UserCookieService) { }

  ngOnInit() {
    this.onLoadData();
  }
  onLoadData(){
    this.userService.getUserList().subscribe((users)=>{
      this.mUsers = this.mUsers.concat(users);
    })
  }
  onSelectUser(i){
    this.onChange.emit(this.userModel);
  }
 
}
