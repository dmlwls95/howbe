import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhtlibPage } from './phtlib.page';

const routes: Routes = [
  {
    path: '',
    component: PhtlibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhtlibPageRoutingModule {}
