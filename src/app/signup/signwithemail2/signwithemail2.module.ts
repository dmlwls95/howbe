import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signwithemail2PageRoutingModule } from './signwithemail2-routing.module';

import { Signwithemail2Page } from './signwithemail2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signwithemail2PageRoutingModule
  ],
  declarations: [Signwithemail2Page]
})
export class Signwithemail2PageModule {}
