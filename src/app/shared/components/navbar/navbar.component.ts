import { Component, OnInit } from '@angular/core';
import { UserCookieService } from '../../../core/services/user-cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private userCookieService:UserCookieService,private router:Router) { }

  ngOnInit() {
  }
  onClickLogout(){
    this.userCookieService.removeCookie();
    this.router.navigate(['auth','login']);
  }
}
