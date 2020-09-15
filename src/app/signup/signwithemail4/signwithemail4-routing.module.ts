import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signwithemail4Page } from './signwithemail4.page';

const routes: Routes = [
  {
    path: '',
    component: Signwithemail4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signwithemail4PageRoutingModule {}
