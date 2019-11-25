import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UpdateOperationDetailsPage} from './update-operation-details.page';

const routes: Routes = [
    {
        path: '',
        component: UpdateOperationDetailsPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UpdateOperationDetailsPageRoutingModule {
}
