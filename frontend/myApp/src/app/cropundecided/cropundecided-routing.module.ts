import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropundecidedPage } from './cropundecided.page';

const routes: Routes = [
  {
    path: '',
    component: CropundecidedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropundecidedPageRoutingModule {}
