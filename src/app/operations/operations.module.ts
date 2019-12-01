import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OperationsPageRoutingModule} from './operations-routing.module';

import {OperationsPage} from './operations.page';
import {SelectPreferiteOperationModalPageModule} from './select-preferite-operation-modal/select-preferite-operation-modal.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OperationsPageRoutingModule,
        SelectPreferiteOperationModalPageModule
    ],
    declarations: [OperationsPage],

})
export class OperationsPageModule {
}
