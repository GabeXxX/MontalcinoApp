import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ImgFieldsPage} from './img-fields.page';

const routes: Routes = [
    {
        path: '',
        component: ImgFieldsPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ImgFieldsPageRoutingModule {
}
