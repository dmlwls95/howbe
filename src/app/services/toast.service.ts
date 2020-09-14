import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toast: ToastController) { }

  async presentToast(str) {
    const toast = await this.toast.create({
      message: str,
      duration: 2000
    });
    toast.present();
  }
}
