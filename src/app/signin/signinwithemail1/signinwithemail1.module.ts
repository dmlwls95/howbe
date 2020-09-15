import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signinwithemail1PageRoutingModule } from './signinwithemail1-routing.module';

import { Signinwithemail1Page } from './signinwithemail1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signinwithemail1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Signinwithemail1Page]
})
export class Signinwithemail1PageModule {}
