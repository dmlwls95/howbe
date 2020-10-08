import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { apiurl } from './Environments';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HobbyService {
  private token;
  constructor(private storage: Storage, private http: HTTP, private router: Router) { }

  getHobby(){
    return new Promise((resolve, reject) =>{
      this.http.get(`${apiurl}/hobby/`, {}, {})
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    });
  }

  sendHobby(body){
    return new Promise<string>((resolve, reject) => {
      //Load token if exists
      this.storage.get('jwt').then((value) => {
          console.log(value);
          this.token = value;
          this.http.setHeader('*', String('Authorization'), String(this.token));
          this.http.setHeader('*', String('Content-Type'), String('application/json'));
          this.http.setDataSerializer('json');
          this.http.post(`${apiurl}/personal/whatisyourhowbe`, body, {})
          .then(res => {
            resolve(res.data);
          }, (err) => {
            reject(err);
          });
      });
    });
  }
}
