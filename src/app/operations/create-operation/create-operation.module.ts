import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CreateOperationPageRoutingModule} from './create-operation-routing.module';

import {CreateOperationPage} from './create-operation.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateOperationPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [CreateOperationPage]
})
export class CreateOperationPageModule {
}
