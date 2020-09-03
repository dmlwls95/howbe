import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { apiurl } from '../Environments';
import { ToastService } from '../toast.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject(false);
  public isOn = false;
  constructor(private http: HTTP, public toast: ToastService, private storage: Storage) {}

   signwithemail(body){
    this.http.post(`${apiurl}/auth/login`, body, {} )
    .then(res => {
      if (res.status === 200){
        this.storage.set('jwt', (JSON.parse(res.data).token))
        .then(() => {
          this.authenticationState.next(true);
        });
      } else {
        this.toast.presentToast('로그인 실패');
      }
    });
   }

   checkauth(){
    return this.storage.get('jwt')
    .then(res => {
      if (res){
        return true;
      } else {
        return false;
      }
    });
  }

  logout(){
    return this.storage.remove('jwt').then(()=>{
      this.authenticationState.next(false);
    })
  }


   isAuthenticated() {
    return this.authenticationState.value;
  }
}
