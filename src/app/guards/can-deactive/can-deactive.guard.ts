import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
export interface DeactivationGuarded {
  canDeactivate(nextState?: string): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactiveGuard implements CanDeactivate<DeactivationGuarded>  {
  constructor(){}
  canDeactivate(component: DeactivationGuarded,currentRoute:ActivatedRouteSnapshot,currentState:RouterStateSnapshot){
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}