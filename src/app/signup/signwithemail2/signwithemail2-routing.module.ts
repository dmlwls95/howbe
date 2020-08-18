import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signwithemail2Page } from './signwithemail2.page';

const routes: Routes = [
  {
    path: '',
    component: Signwithemail2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signwithemail2PageRoutingModule {}
