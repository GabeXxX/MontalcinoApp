import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PreferiteOperationsModalPageRoutingModule} from './preferite-operations-modal-routing.module';

import {PreferiteOperationsModalPage} from './preferite-operations-modal.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PreferiteOperationsModalPageRoutingModule
    ],
    declarations: [PreferiteOperationsModalPage],

})
export class PreferiteOperationsModalPageModule {
}
