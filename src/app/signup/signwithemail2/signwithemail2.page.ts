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
    {val: 'promo', ischecked: false}
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
      this.group.forEach(res => {
        res.ischecked = !res.ischecked;
      });
    }else{
      if (this.group[0].ischecked === true && this.group[1].ischecked === true){
        this.cnt = false;
      }else{
        this.cnt = true;
      }
    }
  }

  async nextPage() {
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
