import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { apiurl } from './Environments';
import { ToastService } from './toast.service';
import { AuthService } from './auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HTTP, public toast: ToastService, private auth: AuthService) { }

  signwithEmail(body){
    this.http.setHeader('*', String('Content-Type'), String('application/json'));
    this.http.post(`${apiurl}/auth/signup`, body, {})
    .then(data => {
      if (data.status === 200){
        this.toast.presentToast('회원가입 완료');
        this.auth.signwithemail(body, true);
      }else{
        this.toast.presentToast('회원가입 실패');
      }
    });
  }

  sendSMSauth(phonenum, islogin: boolean){
    return new Promise((resolve, reject) => {
      this.http.post(`${apiurl}/auth/sendsmssign`, {phone: phonenum, itislogin: islogin}, {})
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
}
