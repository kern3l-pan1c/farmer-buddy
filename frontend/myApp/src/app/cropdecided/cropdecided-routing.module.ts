import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropdecidedPage } from './cropdecided.page';

const routes: Routes = [
  {
    path: '',
    component: CropdecidedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropdecidedPageRoutingModule {}
