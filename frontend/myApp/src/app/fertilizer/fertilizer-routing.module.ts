import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FertilizerPage } from './fertilizer.page';

const routes: Routes = [
  {
    path: '',
    component: FertilizerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FertilizerPageRoutingModule {}
