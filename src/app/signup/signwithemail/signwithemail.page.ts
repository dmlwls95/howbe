import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Signwithemail2Page } from 'src/app/signup/signwithemail2/signwithemail2.page';
import { enterAnimation, leaveAnimation } from '../../animations/modalanim';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-signwithemail',
  templateUrl: './signwithemail.page.html',
  styleUrls: ['./signwithemail.page.scss'],
})
export class SignwithemailPage implements OnInit {

  public birthDay;

  constructor(public modalController: ModalController, public toast: ToastService) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  async nextPage() {
    if(this.birthDay){
      this.dismiss();
      const modal = await this.modalController.create({
        component: Signwithemail2Page,
        enterAnimation,
        leaveAnimation,
        componentProps: {
          birthday : this.birthDay
        }
      });
      return await modal.present();
    }else{
      this.toast.presentToast('생일을 입력해주세요.');
    }
  }


}
