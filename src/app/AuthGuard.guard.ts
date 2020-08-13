import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './services/auth/auth.service';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  private loggedIn = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private storage: Storage
  ) {
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    /*if (!this.authService.isAuthenticated()){
      return this.router.navigate(['choice']);
    }
    return this.authService.isAuthenticated();
  }*/
  return this.storage.get('ischecked').then(res => {
    if(res){
      return true;
    }
    this.router.navigate(['choice']);
    return false;
  });


  }
}
