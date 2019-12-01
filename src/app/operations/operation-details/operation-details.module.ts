import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OperationDetailsPageRoutingModule} from './operation-details-routing.module';

import {OperationDetailsPage} from './operation-details.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OperationDetailsPageRoutingModule
    ],
    declarations: [OperationDetailsPage]
})
export class OperationDetailsPageModule {
}
