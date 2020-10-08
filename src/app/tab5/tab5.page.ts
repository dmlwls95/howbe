import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignupPage } from '../modal/signup/signup.page';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  body;
  constructor(public modalController: ModalController, private auth: AuthService) {

  }

  ngOnInit() {
  }

  async presentSignup(){
    const modal = await this.modalController.create({
      component: SignupPage,
      cssClass: 'my-custom-class',
      swipeToClose: true
    });
    return await modal.present();
  }

  presentlogin(){
    this.body = {
      email : 'dmlwls95@naver.com',
      password: 'vndn9504'
    };
    this.auth.signwithemail(this.body, true);
  }

}
