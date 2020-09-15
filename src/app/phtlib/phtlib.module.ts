import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PhtlibPageRoutingModule } from './phtlib-routing.module';
import { PhtlibPage } from './phtlib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhtlibPageRoutingModule,
  ],
  declarations: [
    PhtlibPage,
  ]
})
export class PhtlibPageModule {}
