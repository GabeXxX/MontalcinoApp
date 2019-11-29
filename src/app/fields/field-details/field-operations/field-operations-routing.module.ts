import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FieldOperationsPage} from './field-operations.page';

const routes: Routes = [
    {
        path: '',
        component: FieldOperationsPage
    },
    {
        path: 'create-operation',
        loadChildren: () => import('./create-operation/create-operation.module').then(m => m.CreateOperationPageModule)
    },
    {
        path: 'preferite-operations-modal',
        loadChildren: () => import('./preferite-operations-modal/preferite-operations-modal.module').then(m => m.PreferiteOperationsModalPageModule)
    },
    {
        path: ':operationId',
        loadChildren: () => import('./operation-details/operation-details.module').then(m => m.OperationDetailsPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FieldOperationsPageRoutingModule {
}
