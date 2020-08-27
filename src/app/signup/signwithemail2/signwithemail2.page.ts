import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { enterAnimation, leaveAnimation } from 'src/app/animations/modalanim';
import { Signwithemail3Page } from 'src/app/signup/signwithemail3/signwithemail3.page';
@Component({
  selector: 'app-signwithemail2',
  templateUrl: './signwithemail2.page.html',
  styleUrls: ['./signwithemail2.page.scss'],
})
export class Signwithemail2Page implements OnInit {

  public group = [
    {val: 'service', ischecked: false},
    {val: 'privacy', ischecked: false},
    {val: 'promo', ischecked: false},
    {val: 'all', ischecked: false}
  ];

  public cnt = true;

  @Input() birthday: string;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  check(val){
    if (val === 'all'){
      if (this.group[3].ischecked === false){
        for (let i = 0; i < 3; i++){
          this.group[i].ischecked = false;
        }
      }else{
        for (let i = 0; i < 3; i++){
          this.group[i].ischecked = true;
        }
      }
    }else{
      if (this.group[0].ischecked === true && this.group[1].ischecked === true){
        this.cnt = false;
      }else{
        this.cnt = true;
      }
    }
  }

  async nextPage() {
    this.dismiss();
    const modal = await this.modalController.create({
      component: Signwithemail3Page,
      enterAnimation,
      leaveAnimation,
      componentProps:{
        birthday: this.birthday,
        check: this.group
      }
    });
    return await modal.present();
  }

}
