import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YieldPageRoutingModule } from './yield-routing.module';

import { YieldPage } from './yield.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YieldPageRoutingModule
  ],
  declarations: [YieldPage]
})
export class YieldPageModule {}
