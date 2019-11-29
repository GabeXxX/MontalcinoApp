import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {UpdateFieldInfoPageRoutingModule} from './update-field-info-routing.module';

import {UpdateFieldInfoPage} from './update-field-info.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UpdateFieldInfoPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [UpdateFieldInfoPage]
})
export class UpdateFieldInfoPageModule {
}
