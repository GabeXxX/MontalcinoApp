import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OperationDetailsPage} from './operation-details.page';

const routes: Routes = [
    {
        path: '',
        component: OperationDetailsPage
    },
    {
        path: 'update-operation-details',
        loadChildren: () => import('./update-operation-details/update-operation-details.module').then(m => m.UpdateOperationDetailsPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OperationDetailsPageRoutingModule {
}
