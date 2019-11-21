import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ListFieldsPageRoutingModule} from './list-fields-routing.module';

import {ListFieldsPage} from './list-fields.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListFieldsPageRoutingModule
    ],
    declarations: [ListFieldsPage]
})
export class ListFieldsPageModule {
}
