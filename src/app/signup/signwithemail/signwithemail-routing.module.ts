import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignwithemailPage } from './signwithemail.page';

const routes: Routes = [
  {
    path: '',
    component: SignwithemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignwithemailPageRoutingModule {}
