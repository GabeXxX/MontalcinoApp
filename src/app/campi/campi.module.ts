import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CampiPageRoutingModule} from './campi-routing.module';

import {CampiPage} from './campi.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CampiPageRoutingModule
    ],
    declarations: [CampiPage]
})
export class CampiPageModule {
}
