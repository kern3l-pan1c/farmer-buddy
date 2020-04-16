import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { TabsPage } from './tabs.page'

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'yield',
        loadChildren: () => import('../yield/yield.module').then( m => m.YieldPageModule)
      },
      {
        path: 'fertilizer',
        loadChildren: () => import('../fertilizer/fertilizer.module').then( m => m.FertilizerPageModule)
      },
        {
          path: 'cropundecided',
          loadChildren: () => import('../cropundecided/cropundecided.module').then( m => m.CropundecidedPageModule)
        },
        {
          path: 'cropdecided',
          loadChildren: () => import('../cropdecided/cropdecided.module').then( m => m.CropdecidedPageModule)
        },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
