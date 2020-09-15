import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signinwithemail1Page } from './signinwithemail1.page';

const routes: Routes = [
  {
    path: '',
    component: Signinwithemail1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signinwithemail1PageRoutingModule {}
