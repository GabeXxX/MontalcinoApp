import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CreatePreferiteOperationPageRoutingModule} from './create-preferite-operation-routing.module';

import {CreatePreferiteOperationPage} from './create-preferite-operation.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreatePreferiteOperationPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [CreatePreferiteOperationPage]
})
export class CreatePreferiteOperationPageModule {
}
