import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from '@ionic-native/file/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP } from '@ionic-native/http/ngx';
import { TabsPage } from './tabs/tabs.page';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WebView,
    Camera,
    File,
    PhotoLibrary,
    TabsPage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HTTP
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
