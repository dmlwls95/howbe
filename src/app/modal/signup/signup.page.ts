import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  signWithemail(){

  }

  async presentLogin(){
    const modal = await this.modalController.create({
      component: LoginPage,
      cssClass: 'my-custom-class',
      swipeToClose: true
    });
    return await modal.present();
  }

}
