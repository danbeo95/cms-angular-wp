import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mFormGroup:FormGroup;
  isFormInvalid:boolean;
  isShowLoading:boolean;
  isError:boolean;
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { }
  
  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.mFormGroup = this.fb.group({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
  onClickLogin(){
    if(this.mFormGroup.invalid){
      this.isFormInvalid = true;
      return;
    }
    this.doLogin();
  }
  doLogin(){
    this.isShowLoading = true;
    let userData = this.mFormGroup.value;
    this.authService.login(userData).pipe(
      finalize(()=>this.isShowLoading = false)
    ).subscribe(res=>{
      this.onResLogin(res);
    },e=>{
      this.onError();
    })
  }
  onResLogin(res){
    this.authService.setCookie(res);
    this.router.navigate(['home']);
  }
  onError(){
    this.isError = true;
  }
}
