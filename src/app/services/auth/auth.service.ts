import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { apiurl } from '../Environments';
import { ToastService } from '../toast.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject<boolean>(null);
  public isOn = false;
  constructor(private http: HTTP, public toast: ToastService, private storage: Storage, private router: Router) {}

   signwithemail(body, isnoob){
    const noobie = isnoob;
    this.http.post(`${apiurl}/auth/login`, body, {} )
    .then(res => {
      if (res.status === 200){
        this.storage.set('jwt', (JSON.parse(res.data).token))
        .then(() => {
          return this.authenticationState.next(true);
        });
        if (noobie){
          this.router.navigate(['tutorial']);
        }else{
          this.router.navigate(['tabs']);
        }
      }
    })
    .catch( err =>{
      this.toast.presentToast('아이디와 비밀번호를 확인해주세요!');
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
    return this.storage.remove('jwt').then(() => {
      this.authenticationState.next(false);
    });
  }


   isAuthenticated() {
    return this.authenticationState.value;
  }

  sendSMSauth(phonenum){
    return new Promise((resolve, reject) => {
      this.http.post(`${apiurl}/auth/sendsmsauth`, {phone: phonenum}, {})
      .then(res => {
        console.log(res);
        if (res.status === 200){
          this.toast.presentToast('인증번호를 발송했습니다');
          resolve(res.data);
        }
      }, (err) => {
        if (err.status === 403){
          this.toast.presentToast('이미 존재하는 번호입니다.');
          reject(err.status);
        }
        if (err.status === 402){
          this.toast.presentToast('존재하지않는 유저입니다.');
          reject(err.status);
        }
        reject(err);
      });
    });
  }

  authNumber(isnumber){
    return new Promise((resolve, reject) => {
      this.http.post(`${apiurl}/auth/checksmsauth`, {number: isnumber}, {})
      .then(res => {
        console.log(res.status);
        if (res.status === 200){
          this.toast.presentToast('인증완료');
          resolve(res.data);
        } else {
          this.toast.presentToast('인증번호가 일치하지 않습니다');
          resolve(res.data);
        }
      }, (err) => {
        reject(err);
      });
    });
  }
}
