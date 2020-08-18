import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signwithemail3Page } from './signwithemail3.page';

const routes: Routes = [
  {
    path: '',
    component: Signwithemail3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signwithemail3PageRoutingModule {}
