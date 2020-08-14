import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject(false);
  public isOn = false;
  constructor(private storage: Storage, private platform: Platform) {
    this.platform.ready().then(async () => {
      await this.storage.get('ischecked').then( (val) => {
        if(val){
          this.authenticationState.next(true);
        }
       });
    });

   }

   checkHobby(){
       this.storage.get('ischecked').then((val) => {
        console.log(val);
        this.isOn = val;
       });
   }

   isAuthenticated() {
    console.log(this.authenticationState.value);
    return this.authenticationState.value;
  }
}
