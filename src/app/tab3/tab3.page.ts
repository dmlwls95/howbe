import { Component, OnInit } from '@angular/core';
import { ImplicitReceiver } from '@angular/compiler';
import { UploadPage } from '../modal/upload/upload.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

   constructor(public modalController: ModalController) {
   }

   ngOnInit(){
   }

}
