
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AdminloginGuard implements CanActivate {

  constructor(private _router:Router ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
      let adminLoginData:any=localStorage.getItem('adminData');
      //check some condition
      if (!adminLoginData && !adminLoginData.length)  {
          alert('You are not allowed to view this page');
           this._router.navigate(['/home']);
          return false;
      }
      return true;
  }
}
