import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SegnalazioniPageRoutingModule} from './segnalazioni-routing.module';

import {SegnalazioniPage} from './segnalazioni.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SegnalazioniPageRoutingModule
    ],
    declarations: [SegnalazioniPage]
})
export class SegnalazioniPageModule {
}
