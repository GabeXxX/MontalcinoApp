import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OperationsPage} from './operations.page';

const routes: Routes = [
    {
        path: '',
        component: OperationsPage
    },
    {
        path: 'create-operation',
        loadChildren: () => import('./create-operation/create-operation.module').then(m => m.CreateOperationPageModule)
    },
    {
        path: 'preferite-operations',
        loadChildren: () => import('./preferite-operations/preferite-operations.module').then(m => m.PreferiteOperationsPageModule)
    },
    {
        path: ':operationId',
        loadChildren: () => import('./operation-details/operation-details.module').then(m => m.OperationDetailsPageModule)
    },
    {
        path: 'select-preferite-operation-modal',
        loadChildren: () => import('./select-preferite-operation-modal/select-preferite-operation-modal.module').then(m => m.SelectPreferiteOperationModalPageModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OperationsPageRoutingModule {
}
