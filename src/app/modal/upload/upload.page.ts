import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, AnimationController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { SignwithemailPage } from 'src/app/signup/signwithemail/signwithemail.page';
import { enterAnimation, leaveAnimation } from '../../animations/modalanim';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  constructor() { }

  ngOnInit() {

  }


}
