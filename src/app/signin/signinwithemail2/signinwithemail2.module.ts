import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signinwithemail2PageRoutingModule } from './signinwithemail2-routing.module';

import { Signinwithemail2Page } from './signinwithemail2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signinwithemail2PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Signinwithemail2Page]
})
export class Signinwithemail2PageModule {}
