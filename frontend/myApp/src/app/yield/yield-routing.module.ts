import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YieldPage } from './yield.page';

const routes: Routes = [
  {
    path: '',
    component: YieldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YieldPageRoutingModule {}
