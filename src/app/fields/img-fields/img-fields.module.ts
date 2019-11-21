import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ImgFieldsPageRoutingModule} from './img-fields-routing.module';

import {ImgFieldsPage} from './img-fields.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ImgFieldsPageRoutingModule
    ],
    declarations: [ImgFieldsPage]
})
export class ImgFieldsPageModule {
}
