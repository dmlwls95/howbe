import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { UploadPage } from '../modal/upload/upload.page';

import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public testb = false;
  constructor(private storage: Storage, public modalController: ModalController, private auth: AuthService, private router: Router) {

  }
  public isloggedIn = false;

  async uploadModal(){
    const modal = await this.modalController.create({
      component: UploadPage,
      cssClass: 'upload-class',
      swipeToClose: true,
    });
    return await modal.present();
  }


  test(){
  }

  ionViewWillEnter(){
    console.log('ionviewwillenter');
    this.auth.authenticationState.subscribe((val) => {
      if (val){
        this.isloggedIn = true;
        this.router.navigate(['tabs/tab1']);
      } else {
        this.isloggedIn = false;
      }
    });
  }

}
