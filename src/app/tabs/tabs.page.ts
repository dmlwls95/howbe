import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public testb = false;
  constructor(private storage: Storage) {

  }

  test(){
    this.storage.clear();
  }

}
