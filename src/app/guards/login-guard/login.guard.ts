import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserCookieService } from '../../core/services/user-cookie.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private userCookieService: UserCookieService, private router: Router) {

  }
  canActivate(): boolean {
    return this.doCheckUserCookie();
  }
  private doCheckUserCookie(): boolean {
    if (this.userCookieService.hasCookie()) {
      this.router.navigate(['home']);
      return false;
    }
    else {
      return true;
    }
  }

}
