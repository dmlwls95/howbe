import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { DomSanitizer } from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from '@ionic-native/file/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';

// import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';
// import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-phtlib',
  templateUrl: './phtlib.page.html',
  styleUrls: ['./phtlib.page.scss'],
})

export class PhtlibPage implements OnInit {
  public result: any;
  public image;
  public count;
  public library: any;
  tmp = [];
  thumbnail = [];

  constructor(private webview: WebView,
              private photolibrary: PhotoLibrary,
              private sanitizer: DomSanitizer,
              public modalCtrl: ModalController,
              private router: Router,
              public filee: File) { }

  ngOnInit() {
  //  this.loadSaved();
}
bfunction(){
  this.image = this.tmp.pop();
}

ionViewWillEnter() {
  this.photolibrary.requestAuthorization().then(() => {
    this.photolibrary.getLibrary()
    .subscribe(res => {
      for(let i in res){
        for(let l=0; l< res[i].length ; l++){
        console.log(res[i][l]);
        let url: string;
        if(res[i][l].id.split(';').length > 0){
          url = 'file:///' + res[i][l].id.split(';')[1];}
        this.tmp.push((window as any).Ionic.WebView.convertFileSrc(url));
        }
      }
    });
  })
  .catch(err => {
    console.log('permissions werent granted');
  });
}

clicked(){

}

  goBack(){
    this.modalCtrl.dismiss();
  }
}
