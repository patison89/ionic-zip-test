import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import {PipesModule} from "../../pipes/pipes.module";

import { CardsPage } from './cards';

@NgModule({
  declarations: [
    CardsPage,
  ],
  imports: [
    IonicPageModule.forChild(CardsPage),
    TranslateModule.forChild(),
    PipesModule
  ],
  exports: [
    CardsPage
  ]
})
export class CardsPageModule { }
