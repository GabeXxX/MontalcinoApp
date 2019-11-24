import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FieldInfoPage} from './field-info.page';

const routes: Routes = [
    {
        path: '',
        component: FieldInfoPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FieldInfoPageRoutingModule {
}
