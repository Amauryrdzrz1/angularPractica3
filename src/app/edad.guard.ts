import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Edad } from './edad';

@Injectable({
  providedIn: 'root'
})
export class EdadGuard implements CanActivate {

  
  canActivate(route: ActivatedRouteSnapshot): boolean {

    console.log(route.params)

    if (route.params["edad"] >= 20) {
      return true;
    } else {
      return false;
    }
  }

}
