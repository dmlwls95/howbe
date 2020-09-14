import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signwithemail4PageRoutingModule } from './signwithemail4-routing.module';

import { Signwithemail4Page } from './signwithemail4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signwithemail4PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Signwithemail4Page]
})
export class Signwithemail4PageModule {}
