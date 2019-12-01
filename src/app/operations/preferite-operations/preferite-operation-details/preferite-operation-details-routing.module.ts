import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PreferiteOperationDetailsPage} from './preferite-operation-details.page';

const routes: Routes = [
    {
        path: '',
        component: PreferiteOperationDetailsPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PreferiteOperationDetailsPageRoutingModule {
}
