import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signinwithemail2Page } from './signinwithemail2.page';

const routes: Routes = [
  {
    path: '',
    component: Signinwithemail2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signinwithemail2PageRoutingModule {}
