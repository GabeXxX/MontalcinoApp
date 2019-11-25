import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {UpdateOperationPageRoutingModule} from './update-operation-routing.module';

import {UpdateOperationPage} from './update-operation.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UpdateOperationPageRoutingModule
    ],
    declarations: [UpdateOperationPage]
})
export class UpdateOperationPageModule {
}
