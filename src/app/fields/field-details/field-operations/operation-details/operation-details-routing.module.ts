import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OperationDetailsPage} from './operation-details.page';

const routes: Routes = [
    {
        path: '',
        component: OperationDetailsPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OperationDetailsPageRoutingModule {
}
