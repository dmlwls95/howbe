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
    this.http.post(`${apiurl}/auth/signup`, body, {})
    .then(data => {
      if (data.status === 200){
        this.toast.presentToast('회원가입 완료');
        this.auth.signwithemail(body);
      }else{
        this.toast.presentToast('회원가입 실패');
      }
    });
  }
}
