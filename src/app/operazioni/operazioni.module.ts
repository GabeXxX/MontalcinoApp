import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OperazioniPageRoutingModule} from './operazioni-routing.module';

import {OperazioniPage} from './operazioni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      OperazioniPageRoutingModule
  ],
    declarations: [OperazioniPage]
})
export class OperazioniPageModule {
}
