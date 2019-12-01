import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FieldOperationsPageRoutingModule} from './field-operations-routing.module';

import {FieldOperationsPage} from './field-operations.page';
import {SelectPreferiteOperationModalPageModule} from '../../../operations/select-preferite-operation-modal/select-preferite-operation-modal.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FieldOperationsPageRoutingModule,
        SelectPreferiteOperationModalPageModule
    ],
    declarations: [FieldOperationsPage],

})
export class FieldOperationsPageModule {
}
