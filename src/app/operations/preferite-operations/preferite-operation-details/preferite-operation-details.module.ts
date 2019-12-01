import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PreferiteOperationDetailsPageRoutingModule} from './preferite-operation-details-routing.module';

import {PreferiteOperationDetailsPage} from './preferite-operation-details.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PreferiteOperationDetailsPageRoutingModule
    ],
    declarations: [PreferiteOperationDetailsPage]
})
export class PreferiteOperationDetailsPageModule {
}
