import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, AnimationController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { SignwithemailPage } from 'src/app/signup/signwithemail/signwithemail.page';
import { enterAnimation, leaveAnimation } from '../../animations/modalanim';
import { PhtlibPage } from 'src/app/phtlib/phtlib.page';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  constructor(public modalCtrl: ModalController, private router: Router){ }

  ngOnInit() {

  }
   goNext(){
    this.router.navigate(['phtlib']);
    this.modalCtrl.dismiss();
  }

    async LibraryModal(){
      const modal = await this.modalCtrl.create({
        component: PhtlibPage,
        cssClass: 'library-class',
        swipeToClose: false,
      });
      return await modal.present();
    }
}
