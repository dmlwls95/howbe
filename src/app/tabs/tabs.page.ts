import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { UploadPage } from '../modal/upload/upload.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public testb = false;
  constructor(private storage: Storage, public modalController: ModalController) {

  }

  async uploadModal(){
    const modal = await this.modalController.create({
      component: UploadPage,
      cssClass: 'upload-class',
      swipeToClose: true,
    });
    return await modal.present();
  }

  test(){
    this.storage.clear();
  }

}
