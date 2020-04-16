import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropundecidedPageRoutingModule } from './cropundecided-routing.module';

import { CropundecidedPage } from './cropundecided.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropundecidedPageRoutingModule
  ],
  declarations: [CropundecidedPage]
})
export class CropundecidedPageModule {}
