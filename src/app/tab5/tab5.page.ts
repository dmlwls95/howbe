import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignupPage } from '../modal/signup/signup.page';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(public modalController: ModalController) {

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

}
