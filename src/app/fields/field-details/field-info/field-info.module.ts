import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FieldInfoPageRoutingModule} from './field-info-routing.module';

import {FieldInfoPage} from './field-info.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FieldInfoPageRoutingModule
    ],
    declarations: [FieldInfoPage]
})
export class FieldInfoPageModule {
}
