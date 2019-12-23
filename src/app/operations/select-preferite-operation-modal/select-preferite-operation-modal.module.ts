import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SelectPreferiteOperationModalPageRoutingModule} from './select-preferite-operation-modal-routing.module';

import {SelectPreferiteOperationModalPage} from './select-preferite-operation-modal.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SelectPreferiteOperationModalPageRoutingModule
    ],
    declarations: [SelectPreferiteOperationModalPage]
})
export class SelectPreferiteOperationModalPageModule {
}
