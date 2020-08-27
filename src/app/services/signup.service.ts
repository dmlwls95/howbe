import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { apiurl } from './Environments';
import { ToastService } from './toast.service';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HTTP, public toast: ToastService) { }

  signwithEmail(body){
    this.http.post(`${apiurl}/auth/signup`, body, {})
    .then(data => {
      if (data.status === 200){
        this.toast.presentToast('회원가입 완료');
      }else{
        this.toast.presentToast('회원가입 실패');
      }
    });
  }
}
