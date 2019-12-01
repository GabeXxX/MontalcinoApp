import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PreferiteOperationsPageRoutingModule} from './preferite-operations-routing.module';

import {PreferiteOperationsPage} from './preferite-operations.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PreferiteOperationsPageRoutingModule
    ],
    declarations: [PreferiteOperationsPage]
})
export class PreferiteOperationsPageModule {
}
