import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,CanActivate,Router,CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { UserCookieService } from '../../core/services/user-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate  {
  constructor(private userCookieService:UserCookieService,private router:Router){
    console.log(this.userCookieService.hasCookie())

  }
  canActivate(){
    return this.doCheckUserCookie();
  }
  canDeactivate(){
    this.router.navigate(['home']);
    return true;
  }
  doCheckUserCookie():boolean{
    if(this.userCookieService.hasCookie()){
      return true;
    }
    else{
      this.router.navigate(['auth']);
      return false;
    }
  }
}
