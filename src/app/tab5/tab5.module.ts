import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab5Page } from './tab5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    Tab5PageRoutingModule
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
