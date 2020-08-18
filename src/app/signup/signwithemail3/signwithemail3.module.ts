import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signwithemail3PageRoutingModule } from './signwithemail3-routing.module';

import { Signwithemail3Page } from './signwithemail3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signwithemail3PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Signwithemail3Page]
})
export class Signwithemail3PageModule {}
