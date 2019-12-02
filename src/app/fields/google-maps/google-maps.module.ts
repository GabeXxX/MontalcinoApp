import {NgModule} from '@angular/core';
import {GoogleMapsComponent} from './google-maps.component';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

@NgModule({
    declarations: [GoogleMapsComponent],
    imports: [CommonModule, IonicModule],
    exports: [GoogleMapsComponent],
    entryComponents: [GoogleMapsComponent]
})
export class GoogleMapsModule {
}
