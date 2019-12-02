import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {NewFieldPageRoutingModule} from './new-field-routing.module';

import {NewFieldPage} from './new-field.page';
import {GoogleMapsComponent} from './google-maps/google-maps.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewFieldPageRoutingModule,
        ReactiveFormsModule,

    ],
    declarations: [NewFieldPage, GoogleMapsComponent],
    entryComponents: [GoogleMapsComponent]
})
export class NewFieldPageModule {
}
