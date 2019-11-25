import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {UpdateOperationDetailsPageRoutingModule} from './update-operation-details-routing.module';

import {UpdateOperationDetailsPage} from './update-operation-details.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UpdateOperationDetailsPageRoutingModule
    ],
    declarations: [UpdateOperationDetailsPage]
})
export class UpdateOperationDetailsPageModule {
}
