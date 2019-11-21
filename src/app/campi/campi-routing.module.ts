import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CampiPage} from './campi.page';

const routes: Routes = [
    {
        path: '',
        component: CampiPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CampiPageRoutingModule {
}
