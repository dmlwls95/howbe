import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
import { apiurl } from '../services/Environments';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  private token;
  constructor(private http: HTTP, private storage: Storage) { }

  getRecommendAboutMe(){
    this.storage.get('jwt').then(value => {
      this.token = value;
      this.http.setHeader('*', String('Authorization'), String(this.token));
      this.http.setHeader('*', String('Content-Type'), String('application/json'));
      this.http.setDataSerializer('json');
      this.http.get(`${apiurl}/posts/recommendforuser`, {}, {})
      .then( res => {
        console.log(res);
      });

    });
  }

  getall(){
    return new Promise((resolve, reject) =>{
      this.http.setHeader('*', String('Content-Type'), String('application/json'));
      this.http.setDataSerializer('json');
      this.http.get(`${apiurl}/posts/all`, {}, {})
      .then(res => {
        resolve(JSON.parse(res.data));
      })
      .catch(err =>{
        reject(err);
      });
    });
  }
}
