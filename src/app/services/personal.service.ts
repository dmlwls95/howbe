import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { apiurl } from './Environments';
@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private token;
  constructor(private storage: Storage, private http: HTTP) { }
  getProfileImage(){
    return new Promise<string>((resolve, reject) => {
      //Load token if exists
      this.storage.get('jwt').then((value) => {
          this.token = value;
          this.http.setHeader('*', String('Authorization'), String(this.token));
          this.http.setDataSerializer('json');
          this.http.get(`${apiurl}/personal/profileimage`, {}, {})
          .then(res => {
            resolve(res.data);
          }, (err) => {
            reject(err);
          });
      });
  });
  }
}
