import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizerPageRoutingModule } from './fertilizer-routing.module';

import { FertilizerPage } from './fertilizer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FertilizerPageRoutingModule
  ],
  declarations: [FertilizerPage]
})
export class FertilizerPageModule {}
