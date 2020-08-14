import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignwithemailPageRoutingModule } from './signwithemail-routing.module';

import { SignwithemailPage } from './signwithemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignwithemailPageRoutingModule
  ],
  declarations: [SignwithemailPage]
})
export class SignwithemailPageModule {}
