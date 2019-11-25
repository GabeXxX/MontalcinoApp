import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {UpdateFieldInfoPageRoutingModule} from './update-field-info-routing.module';

import {UpdateFieldInfoPage} from './update-field-info.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UpdateFieldInfoPageRoutingModule
    ],
    declarations: [UpdateFieldInfoPage]
})
export class UpdateFieldInfoPageModule {
}
