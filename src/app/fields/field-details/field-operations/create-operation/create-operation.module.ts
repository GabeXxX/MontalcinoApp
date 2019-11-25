import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CreateOperationPageRoutingModule} from './create-operation-routing.module';

import {CreateOperationPage} from './create-operation.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateOperationPageRoutingModule
    ],
    declarations: [CreateOperationPage]
})
export class CreateOperationPageModule {
}
