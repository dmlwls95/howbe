import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, AnimationController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { SignwithemailPage } from 'src/app/signup/signwithemail/signwithemail.page';
import { enterAnimation, leaveAnimation } from '../../animations/modalanim';
import { Signinwithemail1Page } from 'src/app/signin/signinwithemail1/signinwithemail1.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  slideOpts = {
    allowTouchMove: false
  };

  constructor(public animationCtrl: AnimationController, public modalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.slides.update();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async signWithemail() {
    this.dismiss();
    const modal = await this.modalController.create({
      component: SignwithemailPage,
      enterAnimation,
      leaveAnimation
    });
    return await modal.present();
  }

  async signinWithemail() {
    this.dismiss();
    const modal = await this.modalController.create({
      component: Signinwithemail1Page,
      enterAnimation,
      leaveAnimation
    });
    return await modal.present();
  }

  ionViewWillEnter(){
    this.slides.update();
  }

  presentLogin(){
    this.slides.slideNext();
  }

  presentSignup(){
    this.slides.slidePrev();
  }


}
