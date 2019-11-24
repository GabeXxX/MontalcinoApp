import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FieldOperationsPageRoutingModule} from './field-operations-routing.module';

import {FieldOperationsPage} from './field-operations.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FieldOperationsPageRoutingModule
    ],
    declarations: [FieldOperationsPage]
})
export class FieldOperationsPageModule {
}
