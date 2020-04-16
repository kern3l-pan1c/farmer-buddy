import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropdecidedPageRoutingModule } from './cropdecided-routing.module';

import { CropdecidedPage } from './cropdecided.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropdecidedPageRoutingModule
  ],
  declarations: [CropdecidedPage]
})
export class CropdecidedPageModule {}
