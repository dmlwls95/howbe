import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signwithemail',
  templateUrl: './signwithemail.page.html',
  styleUrls: ['./signwithemail.page.scss'],
})
export class SignwithemailPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
