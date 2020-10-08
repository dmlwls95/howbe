import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private storage: Storage
  ) {
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    /*console.log(this.authService.isAuthenticated());
    if (this.authService.isAuthenticated() === false){
      return this.router.navigate(['signup']);
    }
    return this.authService.isAuthenticated();*/
    return this.storage.get('jwt').then(res => {
      console.log(res);
      if (res){
        this.authService.authenticationState.next(true);
        return true;
      }
      this.authService.authenticationState.next(false);
      this.router.navigate(['signup']);
      return false;
    });
  }
  /*
  return this.storage.get('jwt').then(res => {
    if (res){
      this.authService.authenticationState.next(true);
      return true;
    }
    this.authService.authenticationState.next(false);
    this.router.navigate(['signup']);
    return false;
  });
  }*/
}
