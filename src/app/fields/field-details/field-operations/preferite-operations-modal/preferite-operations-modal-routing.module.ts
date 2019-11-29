import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PreferiteOperationsModalPage} from './preferite-operations-modal.page';

const routes: Routes = [
    {
        path: '',
        component: PreferiteOperationsModalPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PreferiteOperationsModalPageRoutingModule {
}
